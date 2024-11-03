/* eslint-disable @next/next/no-img-element */
export default function CourseList() {
    const courses = [
        {
            id: 1,
            title: "AI Agents",
            price: "$199",
            description: "Learn to create intelligent AI agents with JavaScript.",
            coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHG3zuZ-ikjD8uHAjK_E-jdJihNpJprRAkg&s",
        },
        {
            id: 2,
            title: "React for Beginners",
            price: "$149",
            description: "A comprehensive guide to React. Learn how to build your first production ready React Application.",
            coverImage: "https://reactforbeginners.com/images/ss/RFB-0001.jpg",
        },
        {
            id: 3,
            title: "Java Programming",
            price: "$129",
            description: "Master Java programming. The advanced approach to building microservices and web applications.",
            coverImage: "https://5.imimg.com/data5/QQ/CT/AO/GLADMIN-25397883/selection-064-500x500.png",
        },
        {
            id: 4,
            title: "Bulding Fullstack Next.js Applications",
            price: "$99",
            description: "Learn how to build fullstack applications with Next.js, Prisma, and PostgreSQL.",
            coverImage: "https://media.licdn.com/dms/image/D4D12AQFJWfUQaQ1qPg/article-cover_image-shrink_600_2000/0/1675674296261?e=2147483647&v=beta&t=zcfSqc5__VRvgFu6e6Ll8vL4xNP_PYnbQYG4YpL9ysE",
        },
    ];

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            {courses.map((course) => (
                <div key={course.id} className="bg-white/10 rounded-lg  backdrop-blur-lg shadow-lg text-white">
                    <img src={course.coverImage} alt={course.title} className="w-full h-[200px] object-cover rounded-t-md mb-4" />
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
