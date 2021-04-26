const dotenv = require("dotenv").config();
const Airtable = require("airtable");
Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
});
const base = require("airtable").base("appnB0c3FOT7M66D5");

class Table {
  constructor(tableName, selectionCriteria) {
    this.base = tableName;
    this.selectionCriteria = selectionCriteria;
  }
  get(callBack) {
    base(this.base).select(this.selectionCriteria).firstPage(callBack);
  }
}

module.exports = {
  Table,
};
