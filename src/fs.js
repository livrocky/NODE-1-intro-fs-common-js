// node js core module
const fs = require("fs");
// console.log("fs===", fs);

// fs.writeFile('failo pavadinimas su keliu', 'duomenys kuriuos mes irasom', callback funkcija su klaidos objektu)
function write() {
  fs.writeFile("../dist/style.css", "Username=James\nage=25", (err) => {
    if (err) {
      console.warn(err);
      return;
    }
    console.log("failas sukurtas");
  });
}
// write();
//read files
const read = () => {
  fs.readFile("./new.txt", (err, data) => {
    if (err) {
      console.warn(err);
      return;
    }
    console.log("data===", data.toString());
  });
};

//delete
const deleteFile = (fileName) => {
  if (fs.existsSync(fileName)) {
    console.log("fileFound");
    fs.unlink(fileName, (err) => {
      if (err) {
        console.warn(err);
        return;
      }
      console.log("files istrintas");
    });
  } else {
    console.log(fileName, "filas istrinas");
  }
};

deleteFile("deleteMe.txt");
