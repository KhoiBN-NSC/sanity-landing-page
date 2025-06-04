"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import { Carousel, getCarouselData } from "@/services/sanity";

export function HeroSection() {
  const [carousel, setCarousel] = useState<Carousel["slides"]>([]);

  useEffect(() => {
    const getCarousel = async () => {
      const response = await getCarouselData();

      setCarousel(response.slides);
    };

    getCarousel();
  }, []);

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  if (!carousel.length) {
    return <div className="min-h-[600]" />;
  }

  return (
    <div ref={sliderRef} className="keen-slider">
      {carousel.map(({ buttonLabel, content, heading }, index) => (
        <section className="keen-slider__slide relative bg-[url(https://www.usatoday.com/gcdn/-mm-/fc2b5c59697b0b247df1a059054822e2fdb29200/c=0-132-2000-1262/local/-/media/USATODAY/USATODAY/2013/08/29/1377788502008-SF-01.jpg)]" key={index}>
          <div className="absolute w-full h-full bg-black opacity-65" />
          <div className="py-16 relative z-10 text-center flex flex-col min-h-[600px] items-center justify-center">
            <h1 className="text-4xl text-white font-bold mb-4">{heading}</h1>
            <p className="text-lg mb-6 text-white">{content}</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold cursor-pointer">
              {buttonLabel}
            </button>
          </div>
        </section>
      ))}
    </div>
  );
}
