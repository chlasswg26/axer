import AdminClientPage from "./AdminClientPage";
import { getPost } from "../actions/post-actions";

export default async function AdminPage() {
  const posts = await getPost();

  return <AdminClientPage posts={posts} />;
}
