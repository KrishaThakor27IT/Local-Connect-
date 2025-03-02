import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

const category = [
    "Plumber",
    "Carpenter",
    "Painter",
    "Labourer",
    "Swipper",
    "Electrician",
    "AC Service"
];

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    };

    return (
        <div>
            <Carousel className="w-full max-w-2xl mx-auto my-10">
                <CarouselContent className="gap-3"> {/* Increased spacing slightly for better layout */}
                    {category.map((cat, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-1"> {/* Larger width */}
                            <Button 
                                onClick={() => searchJobHandler(cat)} 
                                variant="outline" 
                                className="rounded-full px-4 py-2 text-lg font-semibold" /* Bigger button */
                            >
                                {cat}
                            </Button>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default CategoryCarousel;
