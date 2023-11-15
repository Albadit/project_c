import React from 'react';
import ElearningCourse from '@/app/components/elearning';
import Footer from '@/app/components/footer';
import { NavDashboard } from '@/app/components/dashboard/nav'


const user = {
  id: 1,
  role_id: 1,
  profile: "/img/profile.png",
  first_name: "Sara",
  last_name: "Leekmane",
  function_id: 3,
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  email: "saraleekman@outlook.com",
}

const elearning = {
  id: 1,
  imagecourse: "img/e_learing.png",
  imageuser: "img/profile.png",
  title: "H1. Introduction",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
  user_chapters: 3,
  max_chapters: 11,
  isenrolled: true,
  url: "#",
  progress: 80,
}

const lesson = {
    id: 1,
    Lesson: 1,
    url: "./course_lesson",


}



export default function Elearning() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            <header>
                <NavDashboard user={user} />
            </header>
            <main style={{ flex: 1 }}>
                <ElearningCourse elearning={elearning} lesson={lesson}/>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

