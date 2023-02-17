const sharp = require("sharp");
const fs = require("fs");

sharp(
  "/Users/saeed/Documents/projects/image-optimizer-api/Natural Hessonite Garnet 2.jpg"
)
  .rotate()
  .resize(1024, null, {
    kernel: sharp.kernel.lanczos2,
  })
  .jpeg({ mozjpeg: true })
  .toBuffer()
  .then((data) => {
    fs.writeFileSync("output.jpg", data);
    console.log("ok", data);
  })
  .catch((err) => {
    console.log(err);
  });
