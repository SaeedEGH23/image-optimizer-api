const sharp = require("sharp");

const optimizer = function (size) {
  sharp("input.jpg")
    .rotate()
    .resize(size)
    .jpeg({ mozjpeg: true })
    .toBuffer()
    .then((data) => {})
    .catch((err) => {});
};

module.exports = optimizer;
