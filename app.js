const airtable = require("./utils/airtable");
const markdown = require("./utils/markdown");
const templateCompiler = require("./utils/templateCompiler");

const templatePath = "./templates/readme.md";
const destinationFilePath = "readme.md";

let books = [];

let selectionCriteria = {
  maxRecords: 10,
  fields: ["Title", "Author", "Completed", "Status"],
  view: "Main View",
  filterByFormula: "{Status} = 'Currently Reading'",
};

let tableName = "Books";

const recordCallBack = function (err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function (record) {
    books.push({
      title: record.get("Title"),
      percent: record.get("Completed") * 100,
    });
  });

  const content = books
    .map((book) => {
      let graph = markdown.percentageBarAscii(book.percent);
      let formattedNum = book.percent.toString().padStart(2, "0");
      let str = `${graph} ${formattedNum}%  ${book.title} \n`;
      return str;
    })
    .join("");

  const markdownContent = templateCompiler.compile(templatePath, {
    books: markdown.textBlock(content),
  });

  templateCompiler.generateDoc(destinationFilePath, markdownContent);
};

const table = new airtable.Table(tableName, selectionCriteria);
table.get(recordCallBack);
