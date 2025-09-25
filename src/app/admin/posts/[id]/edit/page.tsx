import EditPostForm from "./EditPostForm";
import { getPostById } from "@/app/actions/post-actions";
import { Post } from "@/generated/prisma";

interface Props {
  params: { id: string };
}

export default async function EditPostPage({ params }: Props) {
  const post: Response | Post = await getPostById(params.id);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold !mb-5 text-center">Edit Post</h1>
      <EditPostForm post={post} />
    </div>
  );
}
