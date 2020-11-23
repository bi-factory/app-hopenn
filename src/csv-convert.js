const fs = require("fs");
const { Parser } = require("json2csv");
const mkdirp = require("mkdirp");

function csvParser(fields, path, resorces, name) {
  if (resorces) {
    const options = { fields };
    const parser = new Parser(options);
    const csv = parser.parse(resorces);
    const nameFile = name;
    mkdirp(path).then(() => {
      fs.writeFile(`${path}/${nameFile}.csv`, csv, () =>
        console.log("Completed " + name)
      );
    });
  }
}

async function csvConvertOfCount(path, data, name) {
  let resorces = await data;
  let fields = ["count"];
  csvParser(fields, path, resorces, name);
}

async function csvConvertOfData(path, data, name, fieldsIgnore = []) {
  let resorces = await data;
  resorces = deleteFields(resorces, fieldsIgnore);
  let fields = getTitles(resorces);
  csvParser(fields, path, resorces, name);
}

async function csvConvert(path, data, name = "", fieldsIgnore = []) {
  if (name.endsWith("-count")) csvConvertOfCount(path, data, name);
  else csvConvertOfData(path, data, name, fieldsIgnore);
}



function getTitles(resorces) {
  if (resorces) {
    let fields = [];

    for (const key in resorces[0]) {
      fields.push(key);
    }
    return fields;
  }
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
