"use client";
import dynamic from "next/dynamic";
const CarouselComponent = dynamic(() => import("./CarouselComponent"), {
  ssr: false,
});

const d1Images = [
  "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital1-01.jpg",
  "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital1-02.jpg",
  "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital1-03.jpg",
  "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital1-04.jpg",
];
const d7Images = [
  "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/top/clinic-02.jpeg",
  "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital2-01.jpg",
  "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital2-02.jpg",
  "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital2-03.jpg",
];
const hnImages = [
  "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/top/clinic-03.jpeg",
  "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital3-01.jpg",
  "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital3-02.jpg",
  "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital3-03.jpg",
  "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital3-04.jpg",
];

export default function Application() {
  return (
    <div className="max-w-screen-xl px-4 pb-8 mx-auto">
      <div className="grid-cols-1 sm:grid md:grid-cols-2 ">
        <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <CarouselComponent idCarousel="d1" images={d1Images} />
            {/* <img
              className="rounded-t-lg"
              src="https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/top/clinic-01.jpeg"
              alt="D1"
            /> */}
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              DYM MEDICAL CENTER QUẬN 1
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Phòng B103, Tầng hầm 1, tòa nhà mPlaza Saigon, số 39 Lê Duẩn,
              Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Việt Nam
            </p>
          </div>
        </div>
        <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <CarouselComponent idCarousel="d7" images={d7Images} />
            {/* <img
              className="rounded-t-lg"
              src="https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/top/clinic-02.jpeg"
              alt="D7"
            /> */}
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              DYM MEDICAL CENTER PHÚ MỸ HƯNG
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Phòng 3A01, Tầng 3A, Tòa nhà The Grace, 71 Hoàng Văn Thái, Khu phố
              1, Phường Tân Phú, Quận 7, Thành phố Hồ Chí Minh, Việt Nam
            </p>
          </div>
        </div>
        <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <CarouselComponent idCarousel="hn" images={hnImages} />
            {/* <img
              className="rounded-t-lg"
              src="https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/top/clinic-03.jpeg"
              alt="HN"
            /> */}
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              DYM MEDICAL CENTER HÀ NỘI
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Tầng hầm B1, tòa Epic Tower, ngõ 19 Duy Tân, Phường Mỹ Đình 2,
              Quận Nam Từ Liêm, Thành phố Hà Nội, Việt Nam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
