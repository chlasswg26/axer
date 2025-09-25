"use client";

import Link from "next/link";
import { deletePost } from "@/app/actions/post-actions";
import { Post } from "@/generated/prisma";

export default function AdminClientPage({
  posts,
}: {
  posts: Response | Post[];
}) {
  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    const confirmed = window.confirm(
      "Apakah kamu yakin ingin menghapus post ini?"
    );
    if (!confirmed) {
      event.preventDefault();
    }
  };

  const postList = posts instanceof Response ? [] : posts;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold">Blog Posts</h1>
        <Link
          href="/admin/posts/new"
          className="bg-sky-500 !text-white px-4 py-2 rounded hover:bg-sky-600 transition w-full sm:w-auto text-center"
        >
          Tambah pos
        </Link>
      </div>

      <div className="space-y-4 !flex !flex-col !flex-wrap">
        {postList.length === 0 ? (
          <p className="text-gray-500">Tidak ada post tersedia.</p>
        ) : (
          postList.map((post: Post) => (
            <div
              key={post.id}
              className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <h2 className="font-bold text-lg break-words">{post.title}</h2>
              <p className="text-sm text-gray-600 mt-1">
                {post.published ? "Published" : "Draft"}
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                <Link
                  href={`/admin/posts/${post.id}/edit`}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Edit
                </Link>
                <form action={deletePost} className="inline">
                  <input type="hidden" name="id" value={post.id} />
                  <button
                    type="submit"
                    onClick={handleDelete}
                    className="text-red-600 hover:underline font-medium"
                  >
                    Delete
                  </button>
                </form>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
