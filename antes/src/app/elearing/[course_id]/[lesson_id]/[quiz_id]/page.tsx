import React from 'react';
import QuizPage from './quizPage';
import Footer from '@/app/components/footer';
import { NavDashboard } from '@/app/components/dashboard/nav';

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
      <div className='relative '>
        <main className='flex items-center justify-center min-h-screen'>
          <section> 
            <div className='border-2 light-gray-border rounded-xl shadow-2xl '>
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
