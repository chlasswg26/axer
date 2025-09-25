"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  published: z.boolean(),
});

type FormData = z.infer<typeof schema>;

export default function NewPost() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { published: false },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post("/api/posts", data);

      toast.success("Post created successfully!", {
        position: "bottom-center",
      });
      router.push("/admin");
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
    <div className="max-w-3xl mx-auto p-4">
      <Toaster position="bottom-center" />

      <div className="bg-blue-300 rounded-xl shadow-xl shadow-gray-500 border-2 border-gray-400 p-6">
        <h1 className="text-xl font-semibold text-gray-700 !mb-8">
          Tulis pos baru
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Judul
            </label>
            <input
              id="title"
              type="text"
              {...register("title")}
              placeholder="Judul pos di sini..."
              className={`w-full px-4 py-2.5 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                errors.title
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300"
              }`}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Konten
            </label>
            <textarea
              id="content"
              {...register("content")}
              placeholder="Tulis Konten di sini..."
              rows={10}
              className={`w-full px-4 py-2.5 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                errors.content
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300"
              }`}
            />
            {errors.content && (
              <p className="text-red-500 text-sm mt-1">
                {errors.content.message}
              </p>
            )}
          </div>

          <div className="flex items-center">
            <input
              id="published"
              type="checkbox"
              {...register("published")}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="published"
              className="ml-2 block text-sm text-gray-600"
            >
              Langsung publish
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2.5 px-4 rounded-lg text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition ${
              isSubmitting
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
