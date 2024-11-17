import CourseList from "../_components/CouseList";
import SearchCourses from "../_components/SearchCourses";
import { api } from "@/trpc/server";

export default function Courses(){
    


    return (
        <main className="px-[2%] md:px-[6%]">
           <section className="mt-[4em] px-4">
                <h1 className="text-center text-white font-extrabold text-5xl md:text-5xl lg:text-6xl">
                    Boost your programming skills
                </h1>
                <h1 className="text-center text-5xl md:text-5xl lg:text-6xl font-extrabold">
                    With <span className="text-yellow-600">Top Lated Materials</span>
                </h1>
            </section>


            <section className="mt-[4em]">
                <SearchCourses /> 
            </section>

            <section className="mt-[2em]">
                <CourseList />
            </section>
        </main>
    )
}
