import DashboardCoursesGrid from "@/app/_components/dashboard/CourseCard";
import DashboardCoursesSubNav from "@/app/_components/dashboard/DashboardCoursesSubNav";
import DashboardNav from "@/app/_components/dashboard/Nav";

export default function DashboardCoursesPage() {
    return (
       <main className="p-6 bg-gray-50 min-h-screen h-screen overflow-y-auto bg w-full">
        <nav>
            <DashboardNav />
        </nav>
        <section className="mt-4">
            <DashboardCoursesSubNav />
        </section>
        <section className="mt-6">
            <DashboardCoursesGrid />
        </section>
       </main>
    );
}