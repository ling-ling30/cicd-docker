const CustomErrorHandler = require("../error/custom-error");

const errorhandler = (err, req, res, next) => {
  if (err instanceof CustomErrorHandler) {
    console.log(err);
    return res.status(err.statusCode).json(err.message);
  }
  console.log(err);
  return res.status(505).json(`Something went wrong`);
};
module.exports = errorhandler;
