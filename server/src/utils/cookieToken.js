exports.cookieToken = (res, user) => {
  const token = user.getJwtToken();

  res
    .status(200)
    .cookie("token", token, {
      httpOnly: true,
    })
    .json({ user, token });
};
