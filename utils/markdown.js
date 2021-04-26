// const fs = require("fs");

const tableRow = (arr) => {
  const length = arr.length;
  if (length) {
    return ["| ", arr.join(" | "), " |", "\n"].join("");
  }
};

const tableHeader = (arr) => {
  const length = arr.length;
  return tableRow(arr) + tableRow(new Array(length).fill(":-"));
};

const createTable = (header, rowsArr) => {
  let table = [];
  table.push(tableHeader(header));
  rowsArr.forEach((row) => table.push(tableRow(row)));
  return table.join("");
};

const percentageBarAscii = (percentNum, size) => {
  const EMPTY = "░";
  const FULL = "█";
  size = size || 25;
  const singleBarSize = 100 / size;
  const quantOfFullBar = Math.floor(percentNum / singleBarSize);
  const fullSpaces = FULL.repeat(quantOfFullBar);
  const emptySpaces = EMPTY.repeat(size - quantOfFullBar);
  return fullSpaces + emptySpaces;
};

const textBlock = (text) => "```text\n" + text + "```\n";

// create padstart

module.exports = { percentageBarAscii, textBlock };
