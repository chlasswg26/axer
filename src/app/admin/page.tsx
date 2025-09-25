import AdminClientPage from "./AdminClientPage";
import { getPost } from "../actions/post-actions";
import { Post } from "@/generated/prisma";

export default async function AdminPage() {
  const posts: Response | Post[] = await getPost();

  return <AdminClientPage posts={posts} />;
}
