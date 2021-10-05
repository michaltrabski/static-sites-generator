const {
  myReadFileSync,
  myWriteFileSync,
  myCreatePageSync,
} = require("./utils");

const app = (config) => {
  const data = myReadFileSync("data", "data.json", {});
  const pages = data.pages;

  // myCreatePageSync({ title: "strona główna", slug: "index" });

  pages.forEach((page, i) => {
    myCreatePageSync(page);
  });
};

module.exports = {
  app,
};
