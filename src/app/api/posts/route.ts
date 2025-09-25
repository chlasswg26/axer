import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const { title, content, published } = await req.json();
    console.log("req", title, content, published, session);
    const post = await prisma.post.create({
      data: {
        title,
        content,
        published: published ?? false,
        author: { connect: { email: session?.user.email } },
      },
    });
    return Response.json(post);
  } catch (error) {
    console.log("err", error);
    return new Response("Error creating post", { status: 500 });
  }
}
export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
    });
    return Response.json(posts);
  } catch (error) {
    return new Response("Error fetching posts", { status: 500 });
  }
}
