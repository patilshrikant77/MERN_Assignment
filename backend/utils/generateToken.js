import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, "ShrikantPatil@2021", {
    expiresIn: "30d",
  });
};

export default generateToken;
