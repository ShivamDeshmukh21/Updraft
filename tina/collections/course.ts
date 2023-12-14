import { Collection } from "tinacms";
import { slugify } from "../utils";

export const CourseCollection: Collection = {
  name: "course",
  label: "Courses",
  path: "content/courses",
  format: "json",
  fields: [
    {
      type: "string",
      name: "courseId",
      label: "Course ID",
      required: true,
      uid: true,
      ui: {
        component: "hidden",
      },
    },
    {
      type: "string",
      name: "slug",
      label: "Slug",
      required: true,
    },
    {
      type: "datetime",
      name: "createdAt",
      label: "Created At",
      required: true,
      ui: {
        dateFormat: "MMMM DD, YYYY",
      },
    },
    {
      type: "datetime",
      name: "updatedAt",
      label: "Updated At",
      required: true,
      ui: {
        dateFormat: "MMMM DD, YYYY",
      },
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "path",
      label: "Path",
    },
    {
      type: "string",
      name: "githubUrl",
      label: "GitHub URL",
    },
    {
      type: "string",
      name: "trailerUrl",
      label: "Trailer URL",
    },
    {
      type: "string",
      name: "previewImg",
      label: "Preview Image",
    },
    {
      type: "number",
      name: "duration",
      label: "Duration (in minutes)",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "overview",
      label: "Course Overview",
      fields: [
        {
          type: "string",
          name: "learnings",
          label: "What you will learn",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "preRequisites",
          label: "Pre-requisites",
          list: true,
        },
      ],
    },
    {
      type: "object",
      name: "authors",
      label: "Authors",
      fields: [
        {
          type: "reference",
          name: "author",
          label: "Author",
          collections: ["author"],
        },
      ],
      ui: {
        itemProps(item) {
          const authorName = item.author
            .split("/")
            .pop()
            ?.split(".")
            .shift()
            ?.split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

          return { label: authorName };
        },
      },
      list: true,
    },
    {
      type: "object",
      name: "sections",
      label: "Sections",
      fields: [
        {
          type: "string",
          name: "sectionId",
          label: "Section ID",
          required: true,
          uid: true,
          ui: {
            component: "hidden",
          },
        },
        {
          type: "number",
          name: "number",
          label: "Section Number",
          required: true,
        },
        {
          type: "string",
          name: "slug",
          label: "Slug",
          required: true,
        },
        {
          type: "string",
          name: "title",
          label: "Title",
          isTitle: true,
          required: true,
        },
        {
          type: "object",
          name: "lessons",
          label: "Lessons",
          fields: [
            {
              type: "string",
              name: "lessonId",
              label: "Lesson ID",
              required: true,
              uid: true,
              ui: {
                component: "hidden",
              },
            },
            {
              type: "number",
              name: "number",
              label: "Lesson Number",
              required: true,
            },
            {
              type: "string",
              name: "slug",
              label: "Slug",
              required: true,
            },
            {
              type: "string",
              name: "title",
              label: "Title",
              isTitle: true,
              required: true,
            },
            {
              type: "string",
              name: "description",
              label: "Description",
              ui: {
                component: "textarea",
              },
            },
            {
              type: "number",
              name: "duration",
              label: "Duration (in minutes)",
              required: true,
            },
            {
              type: "string",
              name: "videoUrl",
              label: "Video URL",
            },
            {
              type: "rich-text",
              name: "markdownContent",
              label: "Markdown Content",
              isBody: true,
            },
            {
              type: "object",
              name: "updates",
              label: "Updates",
              fields: [
                {
                  type: "string",
                  name: "title",
                  label: "Title",
                  isTitle: true,
                  required: true,
                },
                {
                  type: "string",
                  name: "description",
                  label: "Description",
                  ui: {
                    component: "textarea",
                  },
                },
                {
                  type: "datetime",
                  name: "date",
                  label: "Date",
                  required: true,
                  ui: {
                    dateFormat: "MMMM DD, YYYY",
                  },
                },
              ],
              list: true,
            },
          ],
          ui: {
            itemProps(item) {
              return { label: item.title };
            },
          },
          list: true,
        },
      ],
      ui: {
        itemProps(item) {
          return { label: item.title };
        },
      },
      list: true,
    },
  ],
  ui: {
    filename: {
      slugify: (values) => {
        return slugify(values?.title || "New Course");
      },
    },
  },
};