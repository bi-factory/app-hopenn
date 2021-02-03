const fs = require('fs');
const { Parser } = require('json2csv');
const mkdirp = require('mkdirp');

function csvParser(path, fileName, titles, resources) {
  const options = { titles };
  const parser = new Parser(options);
  const csvData = parser.parse(resources);
  mkdirp(path).then(() => {
    fs.writeFile(`${path}/${fileName}.csv`, csvData, () => {
      const totalElements = Array.isArray(resources) ? resources.length : '';
      console.log(`Completed  ${fileName} ${totalElements}`);
    });
  });
}

function csvConvertOfCount(path, fileName, resources) {
  let titles = ['count'];
  if (!!resources && Object.keys(resources).length > 0) {
    csvParser(path, fileName, titles, resources);
  }
}

function csvConvertOfData(path, fileName, resources, fieldsIgnore) {
  if (!!resources && resources.length > 0) {
    resources = deleteFields(resources, fieldsIgnore);
    let titles = Object.keys(resources[0]);
    csvParser(path, fileName, titles, resources);
  }
}

function csvConvert(path, fileName, resources, fieldsIgnore) {
  if (fileName.endsWith('-count')) {
    csvConvertOfCount(path, fileName, resources);
  } else {
    csvConvertOfData(path, fileName, resources, fieldsIgnore);
  }
}

function deleteFields(resources, fieldsIgnore = []) {
  if (Array.isArray(fieldsIgnore) && fieldsIgnore.length > 0) {
    return resources.map((resource) => {
      fieldsIgnore.forEach((field) => delete resource[field]);
      return resource;
    });
  } else {
    return resources;
  }
}

module.exports = { csvConvert };
