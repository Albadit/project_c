'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

type QAItems = {
  id: number;
  name: string;
  img: string;
  datetime: string;
  title: string;
  latestComment: string;
  tags: string[];
  reactions: number;
  url: string;
}

type Props = {
  qaList: QAItems[];
}

export const Paginator = (props: Props) => {
  const router = useRouter();
  // Define the type of the state here explicitly
  const [currentPageData, setCurrentPageData] = useState<QAItems[]>([]);
  
  // Constants for pagination
  const PER_PAGE = 2;
  const totalPages = Math.ceil(props.qaList.length / PER_PAGE); // corrected here

  useEffect(() => {
    const urlPage = parseInt(router.query.page as string) || 1; // assert 'as string' here

    // Calculate the page slice
    const start = (urlPage - 1) * PER_PAGE;
    const end = start + PER_PAGE;

    // Set current page data
    setCurrentPageData(props.qaList.slice(start, end)); // corrected here
  }, [router.query.page, props.qaList]); // added dependency here

  // Function to update URL, will cause component to react and slice new page data
  const goToPage = (pageNumber: number) => { // defined type here
    router.push(`/?page=${pageNumber}`);
  };

  return (
    <div>
      {/* Render your data here */}
      {currentPageData.map((item) => (
        <div key={item.id}>
          <div>{item.name}</div>
          <div>{item.datetime}</div>
          <Link href={item.url}><a>{item.title}</a></Link>
          <div>{item.tags.join(', ')}</div>
          <div>{item.latestComment}</div>
          <div>{`Reactions: ${item.reactions}`}</div>
        </div>
      ))}

      {/* Pagination controls */}
      <div>
        {[...Array(totalPages)].map((_, index) => (
          <button key={index} onClick={() => goToPage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}
