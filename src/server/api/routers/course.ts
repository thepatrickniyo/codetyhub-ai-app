import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { getCourses } from '@/actions/courses';

// Create the courses router
export const coursesRouter = createTRPCRouter({
  // Route to fetch all courses
  list: publicProcedure.query(() => {
    const courses = getCourses();
    return courses;
  }),

  // Route to fetch a single course by title
  getByTitle: publicProcedure
    .input(z.object({ title: z.string() }))
    .query(({ input }) => {
      const courses = getCourses();
      const course = courses.find((course) => course.title === input.title);
      if (!course) {
        throw new Error('Course not found');
      }
      return course;
    }),
});
