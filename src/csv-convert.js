const fs = require("fs");
const { Parser } = require("json2csv");
const mkdirp = require("mkdirp");

function csvParser(fields, path, resources, name) {
  const options = { fields };
  const parser = new Parser(options);
  const csv = parser.parse(resources);
  const nameFile = name;
  mkdirp(path).then(() => {
    fs.writeFile(`${path}/${nameFile}.csv`, csv, () =>
      console.log("Completed " + name)
    );
  });
}

function csvConvertOfCount(path, name, data = {}) {
  let fields = ["count"];
  if (Object.keys(data).length > 0) {
    csvParser(fields, path, data, name);
  }
}

function csvConvertOfData(path, name, data = [], fieldsIgnore = []) {
  if (data.length > 0) {
    let resources = deleteFields(data, fieldsIgnore);
    let fields = getTitles(resources);
    csvParser(fields, path, resources, name);
  }
}

function csvConvert(path, data, name = "", fieldsIgnore = []) {
  if (name.endsWith("-count")) {
    csvConvertOfCount(path, name, data);
  } else {
    csvConvertOfData(path, name, data, fieldsIgnore);
  }
}

function getTitles(resources) {
  let fields = [];
  for (const key in resources[0]) {
    fields.push(key);
  }
  return fields;
}

function deleteFields(data = [], fieldsIgnore = []) {
  if (fieldsIgnore.length > 0) {
    return data.map((row) => {
      for (const field of fieldsIgnore) {
        delete row[field];
      }
      return row;
    });
  } else {
    return data;
  }
}

module.exports = { csvConvert };
