import React from "react";

import Footer from "@/app/components/footer";
import { NavDashboard } from "@/app/components/dashboard/nav";
import Lesson from "@/app/components/lesson";

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


export default function LessonPage() {
  return (
    <div>
      <header>
        <NavDashboard user={user} />
      </header>

      <main className="px-24 py-24">
        <Lesson lesson={lesson } />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
