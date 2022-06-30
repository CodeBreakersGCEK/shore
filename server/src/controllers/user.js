/** @type {import("express").RequestHandler} */ //# this will import the types for interllisense

exports.userDemo = async (req, res) => {
  res.json({
    user: "Piyush",
    age: 21,
  });
};
