import { api } from "@/convex/_generated/api";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Liveblocks } from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";

const liveblocks = new Liveblocks({
  secret: "sk_dev_ANV2l_zF4Uy3T_rirXPKfQ3aH1-DtKAMRSDL_ciKNVFwCFisuzArz859JMsIsxiO",
});

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function POST(request: Request) {

    const authorization = await auth()
    const user = await currentUser()
    console.log({authorization})
    if (!user || !authorization) {
        return new Response("Unauthorized", { status: 403 })
    }

    const { room } = await request.json()
    const board = await convex.query(api.board.get, { id: room })

    if (board?.orgId !== authorization.orgId) {
      return new Response("Unauthorized", { status: 401 })
    }

    const userInfo = {
      name: user.firstName!,
      picture: user.imageUrl
    }

  const session = liveblocks.prepareSession(
    user.id,
    { userInfo: userInfo } 
  );

  if (room){
    session.allow(room, session.FULL_ACCESS);
  }

  const { status, body } = await session.authorize();

  return new Response(body, { status });
}