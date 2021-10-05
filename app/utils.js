const fs = require("fs-extra");
const path = require("path");

const myReadFileSync = (_directory, _filename, defaultValue) => {
  const directory = path.resolve(__dirname, _directory);
  fs.ensureDirSync(directory);

  const file = path.resolve(directory, _filename);

  try {
    const data = fs.readFileSync(file, { encoding: "utf8" });
    return data;
  } catch (err) {
    console.log("ERR myReadFileSync", err, _directory, _filename, defaultValue);
    return defaultValue;
  }
};

const myWriteFileSync = (_directory, _filename, data) => {
  const directory = path.resolve(__dirname, _directory);
  fs.ensureDirSync(directory);

  const file = path.resolve(directory, _filename);

  try {
    fs.writeFileSync(file, data);
  } catch (err) {
    console.log("ERR myWriteFileSync", err, _directory, _filename, data);
  }
};

module.exports = {
  myReadFileSync,
  myWriteFileSync,
};
