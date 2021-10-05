const { myReadFileSync, myWriteFileSync } = require("./utils");

const app = (config) => {
  const header = myReadFileSync("templates", "header.html");
  const footer = myReadFileSync("templates", "footer.html");
  const page = myReadFileSync("templates", "page.html");

  const data = header + page + footer;
  myWriteFileSync("build", "index.html", data);
};

module.exports = {
  app,
};
