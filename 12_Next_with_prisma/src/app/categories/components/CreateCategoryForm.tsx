"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  title: z.string().min(1, "Course title is required"),
  instructor: z.string().min(1, "Instructor name is required"),
  description: z.string().optional(),
  duration: z
    .number()
    .min(1, "Duration is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Duration must be a positive number",
    }),
});

type FormData = z.infer<typeof formSchema>;

export default function CreateCourseForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to create course");

      router.push("/courses");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to create course");
    }
  };

  return (
    <div className="p-8">
      <Link
        href="/courses"
        className="text-blue-500 hover:text-blue-700 mb-4 inline-block"
      >
        ← Back to Courses
      </Link>

      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Add New Course</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Course Title *
            </label>
            <input
              {...register("title")}
              type="text"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">
                {errors.title.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Instructor *
            </label>
            <input
              {...register("instructor")}
              type="text"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
            {errors.instructor && (
              <p className="mt-1 text-sm text-red-600">
                {errors.instructor.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              {...register("description")}
              rows={4}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">
                {errors.description.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Duration (hours) *
            </label>
            <input
              {...register("duration")}
              type="number"
              min="1"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
            {errors.duration && (
              <p className="mt-1 text-sm text-red-600">
                {errors.duration.message}
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 
                ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {isSubmitting ? "Creating..." : "Create Course"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
