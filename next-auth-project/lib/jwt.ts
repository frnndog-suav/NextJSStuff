import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";

interface SignOption {
  expiresIn?: string | number;
}

const DEFAULT_SIGN_OPTIONS: SignOption = {
  expiresIn: "1h",
};

export function signJwtAccessToken(
  payload: JwtPayload,
  options: SignOptions = DEFAULT_SIGN_OPTIONS
) {
  const secretKey = process.env.SECRET_KEY;
  const token = jwt.sign(payload, secretKey!, options);

  return token;
}

export function verifyJwt(token: string) {
  try {
    const secretKey = process.env.SECRET_KEY;
    const decoded = jwt.verify(token, secretKey!);
    return decoded as JwtPayload;
  } catch (err) {
    console.log("============ERRO: ", err);
    return null;
  }
}
