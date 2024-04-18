export const errorHandler = (err, req, res, next) => {
  const status = res.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(status).json({ status, message });
};
