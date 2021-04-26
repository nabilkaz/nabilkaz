const fs = require("fs");

const compile = (filePath, contentObj) => {
  // contentObj key should be var and value is content
  const contentKeys = Object.keys(contentObj);
  let data = fs.readFileSync(filePath, "utf8");
  // get content object into arr of keys

  // parse md for variable keys and swap out for content obj value
  contentKeys.forEach((key) => {
    data = data.replace(`{{ ${key} }}`, contentObj[key]);
  });

  // return updated data
  return data;
};

const generateDoc = (filePath, data) => {
  fs.writeFileSync(filePath, data);
};

module.exports = { compile, generateDoc };
