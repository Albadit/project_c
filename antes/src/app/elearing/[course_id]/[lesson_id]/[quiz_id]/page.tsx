import React from 'react';
import QuizPage from './quizPage';
import Footer from '@/app/components/footer';
import { NavDashboard } from '@/app/components/dashboard/nav';
import { prisma } from '@/../../prisma/index';


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

const App: React.FC = () => {
  return (
    <>
      <NavDashboard user={user} />
      <div className=''>
        <main className='min-h-screen flex items-center justify-center'>
          <section> 
            <div className='border light-gray-border rounded-xl shadow-2xl w-full md:w-3/4 min-h-[500px] min-w-[1000px] overflow-hidden'>
              <QuizPage />
            </div>
          </section>
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};



export default App;
