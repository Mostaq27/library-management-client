import { data } from 'autoprefixer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { usePDF } from 'react-to-pdf';

const ReadBook = () => {
  const [singleBook, setSingleBook] = useState({})
  const { toPDF, targetRef } = usePDF({ filename: `${singleBook.book}.pdf` });

  const { id } = useParams()
  useEffect(() => {
    axios.get(`https://library-management-system-server-bay.vercel.app/books/${id}`)
      .then(data => {
        setSingleBook(data.data)
        console.log(data.data)
      })

  }, [id])

  console.log("single", singleBook)
  return (
    <>
      <Helmet><title>ReadBook | SUSIS Library</title></Helmet>
      <div className='my-8 space-y-5'>
       
        <div className='flex flex-col md:flex-row justify-evenly'>

          <h2 className='text-xl font-medium'>{singleBook.book} <br />by {singleBook.author}</h2>
        
          <div className=''><img className='h-48' src={singleBook.photo} alt="" /></div>
          <button className='btn btn-primary' onClick={() => toPDF()}>Download PDF</button>
        </div>
        <div className='w-[80%] mx-auto text-justify' ref={targetRef}>
          {singleBook.description}
        </div>
      </div>
    </>
  );
};

export default ReadBook;