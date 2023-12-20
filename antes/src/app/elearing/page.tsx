'use client'
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Footer from '@/app/components/footer';
import { NavDashboard } from '@/app/components/dashboard/nav'

import Arrowright from "@/app/components/icons/arrow_right";
import { ELearningCard } from '@/app/components/elearning_card';
import { SubjectCard } from '@/app/components/dashboard/subject_card';

const user = {
  id: 1,
  role_id: 1,
  profile: "/img/profile.png",
  first_name: "Sara",
  last_name: "Leekman",
  function_id: 3,
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  email: "saraleekman@outlook.com",
}


type Subject = {
  [x: string]: any;
  id: string;
  name: string;
  description: string;
}

const subject = {
  id: "1",
  image: "img/e_learing.png",
  name: "Psychiatrie",
  description: "La lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet.",
  url: "/elearing/1",
}

export default function ELearning() {
  const [data, setData] = useState<Subject | null>(null);
  const [isLoading, setLoading] = useState(true)

  async function fetchData(){
    try{
      console.log("fetching data");
      const response = await fetch(`/api/v1/subject`);
      console.log("response:", response)
      const fetchedData: Subject = await response.json();
      console.log("fetchedData:", fetchedData);
      setData(fetchedData);
      console.log("data:", fetchedData);
      setLoading(false); 
    } catch (error) {
      console.log("error fetching data", error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>No data found</p>;
  }


  const convertSubjectToElearing = (subject: Subject)=> {
    return {
      id: subject.id,
      name: subject.name,
      user_chapters: 0,
      max_chapters: subject.lessons ? subject.lessons.length : 0,
      url: `elearing/${subject.id}`,
    };
  };

  return (
    <>
    <NavDashboard user={user}/>
    <main className='m-auto p-5 my-12 max-w-[1280px]'>
      <section className='flex flex-col gap-10 mb-12'>
        <h1 className="font-font1 font-bold text-center text-primary text-5xl">E-Learning</h1>
        <div className='flex md:flex-row flex-col justify-center gap-5 2xl:gap-10'>
          {data.map((item: any, index: any) => (
            <ELearningCard key={index} elearing={convertSubjectToElearing(item)} />
          ))}
        </div>
        <div className='flex items-center justify-center gap-6'>
          <button className="bg-secondary hover:bg-[#0840A3] text-[#FAFAFA] font-bold py-3 px-10 rounded">
            <Arrowright className="rotate-180 fill-font2 h-5" />
          </button>
          <button className="bg-secondary hover:bg-[#0840A3] text-[#FAFAFA] font-bold py-3 px-10 rounded">
            <Arrowright className="fill-font2 h-5" />
          </button>
        </div>
      </section>
      <section className='flex flex-col gap-10'>
        <h1 className="tfont-font1 font-bold text-center text-primary text-5xl">Onderwerpen</h1>
        <div className='flex flex-wrap x1:justify-between justify-center gap-10'>
        {/* </div>
        <div className='flex flex-wrap 2xl:flex-row justify-center gap-10'> */}
          <SubjectCard subject={subject} />
          <SubjectCard subject={subject} />
          <SubjectCard subject={subject} />
        {/* </div>
        <div className='flex flex-wrap 2x;:flex-row justify-center gap-10'> */}
          <SubjectCard subject={subject} />
          <SubjectCard subject={subject} />
          <SubjectCard subject={subject} />
        </div>
      </section>
    </main>
    <Footer/>
    </>
  );
}
