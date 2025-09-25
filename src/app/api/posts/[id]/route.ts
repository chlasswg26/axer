import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const post = await prisma.post.findUnique({
      where: { id: params.id },
    });
    if (!post) return new Response("Post not found", { status: 404 });
    return Response.json(post);
  } catch (error) {
    return new Response("Error fetching post", { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const { title, content, published } = await req.json();
    const post = await prisma.post.update({
      where: { id: params.id },
      data: { title, content, published },
    });
    return Response.json(post);
  } catch (error) {
    return new Response("Error updating post", { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    await prisma.post.delete({ where: { id: params.id } });
    return new Response(null, { status: 204 });
  } catch (error) {
    return new Response("Error deleting post", { status: 500 });
  }
}
