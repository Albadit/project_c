import React from "react";
import Link from "next/link";
import Footer from "@/app/components/footer";
import { NavDashboard } from "@/app/components/dashboard/nav";

const user = {
  id: 1,
  role_id: 1,
  profile: "/img/profile.png",
  first_name: "Sara",
  last_name: "Leekmane",
  function_id: 3,
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  email: "saraleekman@outlook.com",
};

const lesson = {
  id: 1,
  imagecourse: "/img/lesson.png",
  title: "Lesson 1 Introduction",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, expedita in fugit amet nulla sint autem tempore dolorem ab veniam, obcaecati aperiam quibusdam blanditiis natus assumenda vero ad reprehenderit pariatur accusamus nobis sunt possimus cupiditate. Consequatur aperiam modi ut tenetur, est enim quas ea pariatur! Pariatur voluptatem, laudantium eius repellat provident consequuntur inventore, voluptas explicabo officia fugit rem unde qui itaque amet, ab voluptatum. Tempore molestiae dolores hic accusantium quod, dolorem neque ab sunt aspernatur eum eveniet odit qui necessitatibus alias numquam? Magnam ipsa dolorem consequuntur similique nesciunt, laudantium inventore quo iure vitae. Ut sequi omnis quis voluptatibus, debitis blanditiis.",
  lesson: 1,
  url: "#"
};

export default function ElearningLesson() {
  const embedId = "I-MmRYP9bdk"; // Extracted from the YouTube URL

  return (
    <>
      <NavDashboard user={user} />
      <main className="flex flex-col justify-center items-center m-auto p-5 my-12">
        <section className="max-w-[1280px]">
          <div className="aspect-w-16 aspect-h-9 shadow-2xl">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${embedId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="pt-8">
            <p className="text-primary font-bold text-3xl py-4">
              {lesson.title}
            </p>
            <p className="font-semibold text-xl font-med">
              Welcome to {lesson.title}!
            </p>
            <p className="">{lesson.description}</p>
            <p className="py-2 font-light">
              After finishing this video you will need to answer a couple of questions about the lesson to move on to the next lesson.
            </p>
          </div>
          <div className="py-24">
            <Link href={"#"} className="bg-primary h-[50px] w-full sm:w-[100px] rounded-xl font-medium my-6 mx-auto px-2 sm:px-20 py-3 text-[#fff]">
              Take quiz
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}