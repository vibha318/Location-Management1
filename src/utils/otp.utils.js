require("dotenv").config();

const http = require("https");
const ApiError = require("./ApiError.utils");
const HTTP_STATUS = require("./statusCode.utils");
const { logError } = require("./logger.utils");

const generateOtp = () => {
  return (100000 + Math.random() * 900000).toFixed();
};

const sendOtp = async (mobileNumber, name = "User") => {
  return new Promise((resolve, reject) => {
    const options = {
      method: "POST",
      hostname: "control.msg91.com",
      port: null,
      // path: `/api/v5/otp?template_id=${process.env.SMS_TEMPLATE_ID}&${mobileNumber == "7600204810" ? "otp=382745" : "otp_length=6"}&mobile=91${mobileNumber}&authkey=${process.env.SMS_AUTH_KEY}&realTimeResponse=`,
      path: `/api/v5/otp?template_id=${process.env.SMS_TEMPLATE_ID}&otp_length=6&mobile=91${mobileNumber}&authkey=${process.env.SMS_AUTH_KEY}&realTimeResponse=`,
      headers: {
        "Content-Type": "application/JSON",
      },
    };

    const req = http.request(options, function (res) {
      const chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });
      res.on("end", function () {
        const body = Buffer.concat(chunks);
        const response = body.toString();
        const resJson = JSON.parse(response);
        logError(response);
        if (resJson.type !== "success" || res.statusCode !== 200) {
          return reject(
            new ApiError(
              HTTP_STATUS.INTERNAL_SERVER_ERROR,
              "Error while sending otp, please try again",
            ),
          );
        }
        resolve(response);
      });
    });

    req.write(`{\n "name": "${name}"\n}`);
    req.end();
  });
};

const verifyOtp = async (mobileNumber, otp) => {
  return new Promise((resolve, reject) => {
    const options = {
      method: "GET",
      hostname: "control.msg91.com",
      port: null,
      path: `/api/v5/otp/verify?otp=${otp}&mobile=91${mobileNumber}`,
      headers: {
        authkey: process.env.SMS_AUTH_KEY,
      },
    };

    const req = http.request(options, function (res) {
      const chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function () {
        const body = Buffer.concat(chunks);
        const response = body.toString();
        const resJson = JSON.parse(response);
        logError(response);
        if (resJson.type !== "success" || res.statusCode !== 200) {
          return reject(
            new ApiError(
              HTTP_STATUS.INTERNAL_SERVER_ERROR,
              "Error while verifying OTP",
            ),
          );
        }
        resolve(response);
      });
    });

    req.end();
  });
};

const sendEmailOtp = async ({ email, otp }) => {
  return new Promise((resolve, reject) => {
    const options = {
      method: "POST",
      hostname: "control.msg91.com",
      port: null,
      path: "/api/v5/email/send",
      headers: {
        accept: "application/JSON",
        authkey: process.env.SMS_AUTH_KEY,
        "Content-Type": "application/JSON",
      },
    };

    const req = http.request(options, function (res) {
      const chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });
      res.on("end", function () {
        const body = Buffer.concat(chunks);
        const response = body.toString();
        const resJson = JSON.parse(response);
        logError(response);
        if (resJson.status !== "success" || res.statusCode !== 200) {
          return reject(
            new ApiError(
              HTTP_STATUS.INTERNAL_SERVER_ERROR,
              "Error while sending otp, please try again",
            ),
          );
        }
        resolve(response);
      });
    });

    req.write(
      JSON.stringify({
        recipients: [
          {
            to: [
              {
                name: "",
                email: email,
              },
            ],
            variables: {
              company_name: "Swasth Hriday",
              otp: otp,
            },
          },
        ],
        from: {
          name: "Swasth Hriday - Partner",
          email: "partner@swasthhriday.in",
        },
        domain: "mail.swasthhriday.in",
        template_id: "global_otp",
      }),
    );
    req.end();
  });
};

const otpUtils = { sendOtp, verifyOtp, sendEmailOtp, generateOtp };
module.exports = otpUtils;
