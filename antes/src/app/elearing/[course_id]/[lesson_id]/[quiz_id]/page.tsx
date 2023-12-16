import React from "react";
import Footer from "@/app/components/footer";
import { NavDashboard } from "@/app/components/dashboard/nav";
import Quiz from "@/app/components/quiz";

const user = {
  name: "Sara",
  email: "saraleekman@outlook.com",
  image: "/img/profile.png",
}

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