const sharp = require("sharp");

sharp("input.jpg")
  .rotate()
  .resize(200)
  .jpeg({ mozjpeg: true })
  .toBuffer()
  .then((data) => {
    console.log("ok", data);
  })
  .catch((err) => {
    console.log(err);
  });
