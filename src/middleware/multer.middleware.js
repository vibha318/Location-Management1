const multer = require("multer");
const path = require("path");
const fs = require("fs");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    let subFolder = "/share";
    const imageType = req.body.imageType;
    switch (imageType) {
      case "1000": // CP Profile Image
        subFolder += "/cp";
        break;
      case "2000": // Practice Images
        subFolder += "/practice";
        break;
      case "3000": // User Profile Image
        subFolder += "/user";
        break;
      case "4000": // CP Type Icon
      case "4010": // Subscription Icon
      case "4020": // Practice Type Icon
      case "4030": // Amenity Icon
      case "4040": // Payment Mode Icon
        subFolder += "/admin";
        break;
      case "5000": // Blog Images
        subFolder += "/blog";
        break;
      case "6000": // Ads Images
        subFolder += "/ads";
        break;
      default:
        subFolder += "/other";
        break;
    }
    req.fileSubPath = subFolder;
    // eslint-disable-next-line no-undef
    const uploadPath = path.join(__basedir, subFolder);
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const newFileName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 100000) +
      path.extname(file.originalname);
    cb(null, newFileName);
  },
});

const upload = multer({
  storage: multerStorage,
  limits: { fileSize: 5 * 1024 * 1024 },
});

module.exports = upload;
