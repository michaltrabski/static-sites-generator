const fs = require("fs-extra");
const path = require("path");

const myCreatePageSync = (data) => {
  const directory = path.resolve(__dirname, "build");
  const { slug, title } = data;
  const fileName = slug + ".html";

  const header = myReadFileSync("templates", "header.html", "");
  const footer = myReadFileSync("templates", "footer.html", "");
  const page = myReadFileSync("templates", "page.html", "");

  let content = header + page + footer;

  for (const [key, value] of Object.entries(data)) {
    const regex = new RegExp(`{{${key}}}`, "g");
    content = content.replace(regex, value);
  }

  myWriteFileSync(directory, fileName, content);
};

const myReadFileSync = (_directory, _filename, defaultValue) => {
  const directory = path.resolve(__dirname, _directory);
  fs.ensureDirSync(directory);

  const file = path.resolve(directory, _filename);

  try {
    const data = fs.readFileSync(file, { encoding: "utf8" });
    return defaultValue instanceof Object ? JSON.parse(data) : data;
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
  myCreatePageSync,
};
