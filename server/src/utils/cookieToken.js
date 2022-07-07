exports.cookieToken = (res, user) => {
  const token = user.getJwtToken();

  res
    .cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    })
    .status(200)
    .json({ user, token });
};
