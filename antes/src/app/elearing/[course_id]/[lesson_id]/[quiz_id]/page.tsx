'use client'
import React from "react";
import Footer from "@/app/components/footer";
import { NavDashboard } from "@/app/components/dashboard/nav";
import Quiz from "@/app/components/quiz";
import { useParams } from "next/navigation";

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

export default function ElearningQuiz() {

  const { course_id, lesson_id, quiz_id } = useParams();
  console.log("course:", course_id, lesson_id, quiz_id);

  return (
    <>
      <NavDashboard user={user} />
      <main className="flex flex-col justify-center items-center mt-6 mb-6 m-auto p-5 quiz">
        <section className="max-w-[500px] w-full">
          <Quiz lesson_id={lesson_id as string} />
        </section>
      </main>
      <Footer />
    </>
  );
}