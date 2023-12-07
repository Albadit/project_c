import React from "react";
import Footer from "@/app/components/footer";
import { NavDashboard } from "@/app/components/dashboard/nav";
import Quiz from "@/app/components/quiz";

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
  return (
    <>
      <NavDashboard user={user} />
      <main className="flex flex-col justify-center items-center m-auto p-5 quiz">
        <section className="max-w-[500px] w-full">
          <Quiz />
        </section>
      </main>
      <Footer />
    </>
  );
}