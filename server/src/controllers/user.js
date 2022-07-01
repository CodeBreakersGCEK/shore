/** @type {import("express").RequestHandler} */ //# this will import the types for interllisense

exports.userDemo = async (req, res) => {
  res.json([
    { id: 1, name: "Piyush" },
    { id: 2, name: "Rakesh" },
  ]);
};
