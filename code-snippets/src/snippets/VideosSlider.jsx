import React, { useEffect, useState } from 'react';
// import images
import image1 from '/assets/random-img-1.jpeg';
import image2 from '/assets/random-img-2.jpeg';
import image3 from '/assets/random-img-3.jpeg';
import image4 from '/assets/random-img-4.jpeg';
import image5 from '/assets/random-img-5.jpeg';
import Slide from './Slide';


const VideosSlider = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length)
        }, 3000);
    });

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length)
    }

    const [slides, setSlides] = useState([
        {image: image1, title: ''},
        {image: image2, title: ''},
        {image: image3, title: ''},
        {image: image4, title: ''},
        {image: image5, title: ''}
    ]);

    // index of slides
    const [currentIndex, setCurrentIndex] = useState(0);
return (
    <div className='flex justify-center items-center md:hidden lg:hidden xl:hidden '>
        <button onClick={handlePrevSlide}>Prev</button>
        <Slide image={images[currentSlide]} />
        <button onClick={handleNextSlide}>Next</button>
        <div className="preview">
            <div className="prev-preview">
                <Slide image={images[(currentSlide - 1 + images.length) % images.length]} />
            </div>
            <div className="next-preview">
                <Slide image={images[(currentSlide + 1) % images.length]} />
            </div>
        </div>
    </div>
)

}

export default VideosSlider
