'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/app/components/footer";
import { NavDashboard } from "@/app/components/dashboard/nav";
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

type lesson ={
  id: number;
  title: string;
  description: string;
  lesson: number;
  lesson_data: string;

}


export default function ElearningLesson(props: { lesson_id: string }) {
  const [data, setData] = useState<lesson | null>(null);
  const [isLoading, setLoading] = useState(true)

  async function fetchData(){
    try{
      console.log("fetching data");
      const response = await fetch(`/api/v1/lesson/${lesson_id}`);
      console.log("response:", response)
      const fetchedData: lesson = await response.json();
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

  const {  lesson_id } = useParams();
  console.log("lesson:", lesson_id);
  console.log("data:", data);
  
  return (
    console.log("title", data?.title),
    <>
      <NavDashboard user={user} />
      <main className="flex flex-col justify-center items-center m-auto p-5 my-12">
        <section className="max-w-[1280px]">
          <div className="aspect-w-16 aspect-h-9 shadow-2xl">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${data?.lesson_data.url}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="pt-8">
            <p className="text-primary font-bold text-3xl py-4">
              {data?.title}
            </p>
            <p className="font-semibold text-xl font-med">
              Welkom bij {data?.title}!
            </p>
            <p className="">{data?.description}</p>
            <p className="py-2 font-light">
              Na het bekijken van deze video zal je een paar vragen moeten beantwoorden om door te kunnen naar de volgende les.
            </p>
          </div>
          <div className="py-24">
            <Link href={`${window.location.pathname}/1`}className="bg-primary h-[50px] w-full sm:w-[100px] rounded-xl font-medium my-6 mx-auto px-2 sm:px-20 py-3 text-[#fff]">
              Quiz afnemen
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}