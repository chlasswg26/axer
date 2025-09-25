"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Post } from "@/generated/prisma";
import toast, { Toaster } from "react-hot-toast";
import { Fragment } from "react";

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  published: z.boolean(),
});

type FormData = z.infer<typeof schema>;

export default function EditPostForm({ post }: { post: Response | Post }) {
  const router = useRouter();
  const postData = post instanceof Response ? null : post;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: postData?.title,
      content: postData?.content,
      published: postData?.published,
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await axios.put(`/api/posts/${postData?.id}`, data);
      toast.success("Post updated successfully!", {
        position: "bottom-center",
      });
      router.push("/admin");
      router.refresh();
    } catch (error: unknown) {
      let errorMessage = "Something went wrong";
      if (axios.isAxiosError(error)) {
        errorMessage =
          error.response?.data?.message ||
          error.message ||
          "Failed to create post";
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      toast.error(errorMessage, { position: "bottom-center" });
    }
  };

  return (
    <Fragment>
      <Toaster position="top-right" reverseOrder={false} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-6"
      >
        <div>
          <label htmlFor="title" className="block text-sm font-semibold mb-1">
            Judul
          </label>
          <input
            id="title"
            {...register("title")}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-semibold mb-1">
            Konten
          </label>
          <textarea
            id="content"
            {...register("content")}
            rows={12}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition font-mono"
          />
          {errors.content && (
            <p className="text-red-500 text-sm mt-1">
              {errors.content.message}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <input
            id="published"
            type="checkbox"
            {...register("published")}
            className="h-5 w-5 text-blue-600 rounded transition"
          />
          <label htmlFor="published" className="text-sm font-medium">
            Langsung publish
          </label>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          <button
            type="button"
            disabled={isSubmitting}
            onClick={() => router.back()}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
          >
            Batal
          </button>
        </div>
      </form>
    </Fragment>
  );
}
