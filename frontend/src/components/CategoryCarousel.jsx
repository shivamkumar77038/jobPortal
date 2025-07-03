import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer"
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="relative perspective-[1000px]">
        <Carousel className="w-full max-w-full mx-auto my-10 sm:my-16 md:my-20">
          <CarouselContent>
            {category.map((cat, index) => (
              <CarouselItem
                key={index}
                className="basis-full xs:basis-4/5 sm:basis-2/3 md:basis-1/2 lg:basis-1/3 px-2 transition-transform duration-500 hover:scale-[1.05] hover:-rotate-x-1 hover:rotate-y-2"
              >
                <div className="rounded-3xl bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-xl transform-gpu transition-all duration-500 hover:shadow-2xl hover:translate-y-[-4px] hover:scale-105">
                  <Button
                    onClick={() => searchJobHandler(cat)}
                    variant="outline"
                    className="rounded-3xl w-full bg-transparent border-none text-white py-6 text-base sm:text-lg md:text-xl font-semibold"
                  >
                    {cat}
                  </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* 3D-looking arrows with shadow */}
          <CarouselPrevious className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-11 sm:w-11 bg-white text-gray-800 shadow-lg rounded-full hover:scale-110 transition-transform" />
          <CarouselNext className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-11 sm:w-11 bg-white text-gray-800 shadow-lg rounded-full hover:scale-110 transition-transform" />
        </Carousel>
      </div>
    </div>
  );
};

export default CategoryCarousel;
