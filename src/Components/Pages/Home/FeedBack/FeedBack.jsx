
// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '@smastrom/react-rating/style.css'
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";


const FeedBack = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('/feedback.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);  
                setCards(data);
            });
    }, []);

    return (
        <>
            <div className="bg-center bg-no-repeat bg-[url('https://i.ibb.co/yVstWFv/study-group-learning-library.jpg')] bg-gray-700 bg-blend-multiply">
                <h2 className="text-5xl font-bold text-center space-x-8 py-8 divider">What People Say</h2>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                {
                    cards.map(review=> <SwiperSlide  >
                        <div className="flex justify-center flex-col items-center  py-10">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={review.photo} />
                            </div>
                        </div>
                            <p className="text-2xl text-yellow-500 py-4 font-semibold">{review.name}</p>

                            <p className='w-9/12 text-black dark:text-gray-400 text-center'>{review.comment}</p>
                        <div className=" flex flex-col items-center py-4 ">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />

                        </div>
                        </div>

                    </SwiperSlide>)
                }
                  </Swiper>
                    {/* <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper> */}
            </div>
        </>
    )
}

export default FeedBack;


{/* <div>
            <SectionName title="What's our client says"></SectionName>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    data.map(review => <SwiperSlide key={review._id}>
                        <div className="flex justify-center flex-col items-center space-y-4">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={review.picture} />
                            </div>
                        </div>
                            <p className="text-2xl text-yellow-500">{review.studentName}</p>

                            <p className='w-9/12 text-black'>{review.comment}</p>
                        <div className=" flex flex-col items-center space-y-3">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />

                        </div>
                        </div>

                    </SwiperSlide>)
                }

            </Swiper>
            <div>
            
        </div>
        </div> */}