import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getCourses = () => {
  const coursesDir = path.join(process.cwd(), 'courses');
  const courseFiles = fs.readdirSync(coursesDir).filter(file => file.endsWith('.mdx'));

  const courses = courseFiles.map(fileName => {
    const filePath = path.join(coursesDir, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContents);

    return {
      title: data.title,
      description: data.description,
      date: data.date,
      image: data.image,
      tags: data.tags,
      price: data.price,
    };
  });

  return courses;
};
