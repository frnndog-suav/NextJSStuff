import * as bcrypt from "bcrypt";
import prisma from "../../../../lib/prisma";
import { signJwtAccessToken } from "../../../../lib/jwt";

interface RequestBody {
  username: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();
  const user = await prisma.user.findFirst({
    where: {
      email: body.username,
    },
  });

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...userWithoutPass } = user;
    const accessToken = signJwtAccessToken(userWithoutPass);
    const resolved = {
      ...userWithoutPass,
      accessToken,
    };

    return new Response(JSON.stringify(resolved));
  } else return new Response(JSON.stringify(null));
}
