export default async function handler(req, res) {
  const previousPage = req.headers.referer;

  //If preview is on, turn it off
  if (req.preview) {
    res.clearPreviewData();
    res.writeHead(307, { Location: previousPage });
    return res.end();
  }

  const password = "SENHASEGURA";

  if (req.query.password !== password) {
    return res.status(401).json({
      message: "Invalid password",
    });
  }

  //If preview is off, turn it on
  res.setPreviewData({});
  res.writeHead(307, { Location: previousPage });
  res.end();
}
