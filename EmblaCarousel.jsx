import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import { Mousewheel, Navigation } from "swiper/modules";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function SwiperWithMouseWheel() {
  const obj = [
    "https://plus.unsplash.com/premium_photo-1682724602925-f0264b85953f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1711071809918-06de943027a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1638519922476-50688bb1f318?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1658324881244-37f97fc8dcb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1687169503260-85f00f122398?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MHx8MHx8fDA%3D",
  ];

  const percentage = 5;
  const minValue = 0;
  const maxValue = 10;

  return (
    <>
      <Swiper
        modules={[Mousewheel, Navigation]}
        navigation={true}
        mousewheel={true}
        spaceBetween={5}
        slidesPerView={5}
        onSlideChange={() => console.log("slide change")}
        className="bg-red-500 mt-3 pt-6 pl-7 relative"
        style={{ backgroundColor: "#04152d" }}
      >
        {obj.map((value, index) => (
          <SwiperSlide
            key={index}
            className="rounded-xl"
            style={{
              height: "400px",
              width: "300px",
              overflow: "hidden",
            }}
          >
            <div className=" w-full relative" style={{ height: "80%" }}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${value})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className=" absolute w-20 h-20 bottom-[-15px]">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  strokeWidth={12}
                  styles={buildStyles({
                    pathColor: "#d42b7c",
                  
                  })}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
