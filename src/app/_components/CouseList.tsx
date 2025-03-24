/* eslint-disable @next/next/no-img-element */
import { api } from "@/trpc/server";

export interface Course {
    title: string;
    price: string;
    description: string;
    image: string;
    tags: string[];
    date: string;  
}
export default async function CourseList() {
  const courses = await getServerData() as Course[] || [];

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            {courses.map((course) => (
                <div key={course.title} className="bg-white/10 rounded-lg  backdrop-blur-lg shadow-lg text-white">
                    <img src={course.image} alt={course.title} className="w-full h-[200px] object-cover rounded-t-md mb-4" />
                    <menu className="p-4 px-6">
                    <h2 className="text-xl font-bold">{course.title}</h2>
                    <p className="text-lg font-semibold text-green-400">{course.price}</p>
                    <p className="text-md mt-2 text-white/80">{course.description}</p>
                    </menu>
                </div>
            ))}
        </section>
    );
}

const getServerData = async () => {
    return api.course.list().then((data) => {
        return data;
    }
    )
    .catch((error) => {
        console.error(error);
    });

}