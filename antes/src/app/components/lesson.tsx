import React from "react";
import Video from "./video";
import Link from "next/link";

type LessonItems = {
  id: number;
  imagecourse: string;
  title: string;
  description: string;
  lesson: number;
  url: string;
};

type Props = {
  lesson: LessonItems;
};

export const lesson = (props: Props) => {
  const videoId = "I-MmRYP9bdk"; // Extracted from the YouTube URL
  return (
    <div>
      <div>
        <Video embedId={videoId} />
      </div>

      <div className="pt-8">
        <p
          className="text-primary
              font-bold
              text-3xl
              py-4"
        >
          {props.lesson.title}
        </p>
        <p className="font-semibold text-xl font-med">
          Welcome to {props.lesson.title}!
        </p>
        <p className="">{props.lesson.description}</p>
        <p className="py-2 font-light">
          After finishing this video you will need to answer a couple of questions about the lesson to move on to the next lesson.
        </p>
      </div>
      <div className="py-24">
        <Link
          href={"#"} // TODO 
          className="bg-primary h-[50px] w-full sm:w-[100px] rounded-xl font-medium my-6 mx-auto px-2 sm:px-20 py-3 text-[#fff]"
        >
          Take quiz
        </Link>
      </div>
    </div>
  );
};

export default lesson;
