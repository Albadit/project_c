import React from "react";
import Link from "next/link";
import ArrowForwardRounded from "@/app/components/icons/arrow_right";
import Image from "next/image";

type ElearningItems = {
  id: number;
  imagecourse: string;
  imageuser: string;
  title: string;
  description: string;
  user_chapters: number;
  max_chapters: number;
  isenrolled: boolean;
  url: string;
  progress: number;
};

type LessonItems = {
  id: number;
  Lesson: number;
  url: string;
};

type Props = {
  elearning: ElearningItems;
  lesson: LessonItems;
};

export const e_learning_course = (props: Props) => {
  const progression =
    (props.elearning.user_chapters / props.elearning.max_chapters) * 100;

  return (
    <div className="w-full py-[10rem] px-12 bg-white">
      <p className="text-primary flex justify-center font-bold text-3xl">
        {props.elearning.title}
      </p>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 w-full border light-gray-border shadow-xl flex flex-col my-4 rounded-lg">
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full bg-white"
              src={props.elearning.imagecourse}
              alt="/"
            />
            <div className="flex flex-row py-8 ">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="h-10 pl-5"
                src={props.elearning.imageuser}
                alt="/"
              />
              <h2 className="text-2xl font-bold text-primary pl-4 pt-1">
                {props.elearning.isenrolled
                  ? "You are enrolled"
                  : "You are not enrolled"}
              </h2>
            </div>
            <div className="flex justify-between border-t py-5 pl-8 ">
              <p className="font-semibold">Completion Time</p>
              <p className="pr-4"> 10h and 3 minutes </p>
            </div>
            <div className="flex justify-between border-t py-4 pl-8">
              <p className="font-semibold">Lessons completed</p>
              <p className="pr-20">{props.elearning.user_chapters}</p>
            </div>
            <div className="flex justify-between border-t py-4 pl-8 border-b">
              <p className="font-semibold">Total lessons</p>
              <p className="pr-20">{props.elearning.max_chapters}</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 w-full border light-gray-border shadow-xl flex flex-col my-4 rounded-lg">
          {/* second child content */}
          <p className="text-center text-gray-500 text-base font-normal font-['Roboto'] tracking-tight mt-20 ml-12 mr-12 text-[#A9A9A9]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            nobis eaque repellat fuga ex mollitia cum optio adipisci libero
            voluptatibus iusto sed aut officia aliquam fugit, sunt sit at eius
            ipsum? Dignissimos nostrum eum, illum alias neque exercitationem
            reprehenderit quo quidem asperiores laboriosam, ipsa quisquam.
            Facere sapiente reiciendis culpa? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Animi nobis eaque repellat fuga ex
            mollitia cum optio adipisci libero voluptatibus iusto sed aut
            officia aliquam fugit, sunt sit at eius ipsum? Dignissimos nostrum
            eum, illum alias neque exercitationem reprehenderit quo quidem
            asperiores laboriosam, ipsa quisquam. Facere sapiente reiciendis
            culpa?
          </p>
          <div className="flex flex-col mt-20 ml-16 space-y-4 font-bold">
            <div className="flex space-x-20 pb-6">
              <p className="border-primary border-b-2">Course</p>
            </div>
            <div className="pb-8">
              <Link
                href={props.lesson.url}
                className="bg-primary h-[50px] w-full sm:w-[100px] rounded-xl font-medium my-6 mx-auto px-2 sm:px-20 py-3 text-[#fff]"
              >
                Lesson 1
                <span className="hidden lg:inline">
                  - Introduction to the course
                </span>
                <span className=" pl-16">30 min</span>
                {/* lesson time is now hardcoded */}
              </Link>
            </div>
            <div className="pb-8">
              <Link
                href={props.lesson.url}
                className="bg-primary h-[50px] w-full sm:w-[100px] rounded-xl font-medium my-6 mx-auto px-2 sm:px-20 py-3 text-[#fff]"
              >
                Lesson 1
                <span className="hidden lg:inline">
                  - Introduction to the course
                </span>
                <span className=" pl-16">30 min</span>
              </Link>
            </div>
            <div className="pb-8">
              <Link
                href={props.lesson.url}
                className="bg-primary h-[50px] w-full sm:w-[100px] rounded-xl font-medium my-6 mx-auto px-2 sm:px-20 py-3 text-[#fff]"
              >
                Lesson 1
                <span className="hidden lg:inline">
                  - Introduction to the course
                </span>
                <span className=" pl-16">30 min</span>
              </Link>
            </div>
            <div className="pb-8">
              <Link
                href={props.lesson.url}
                className="bg-primary h-[50px] w-full sm:w-[100px] rounded-xl font-medium my-6 mx-auto px-2 sm:px-20 py-3 text-[#fff]"
              >
                Lesson 1
                <span className="hidden lg:inline">
                  - Introduction to the course
                </span>
                <span className=" pl-16">30 min</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap sm:justify center justify-end items-center">
            <Link
              href={props.lesson.url}
              className="bg-secondary rounded-md font-bold mx-12 my-12 px-5 py-4 text-[#fff] text-center "
            >
              Start course
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default e_learning_course;
