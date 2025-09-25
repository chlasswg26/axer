"use server";

import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Post } from "@/generated/prisma";

export async function deletePost(formData: FormData): Promise<void> {
  const id = formData.get("id") as string;

  if (!id) {
    throw new Error("ID is required");
  }

  await prisma.post.delete({ where: { id } });

  revalidatePath("/admin");

  return;
}
export async function getPost(): Promise<Response | Post[]> {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  return posts;
}
export async function getPostById(id: string): Promise<Response | Post> {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  const post = await prisma.post.findUnique({
    where: { id },
  });

  if (!post) {
    throw new Error(`Post with ID (${id}) not found`);
  }

  return post;
}
