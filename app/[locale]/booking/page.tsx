"use client";

import {
  Tabs,
  Tab,
  Card,
  CardBody,
  Link,
  Breadcrumbs,
  BreadcrumbItem,
  useDisclosure,
} from "@nextui-org/react";
import { BOOKING_HCM_D1, BOOKING_HCM_D7, BOOKING_HN_NTL, HOME } from "@/route";
import { useState } from "react";
import VideoModal from "./VideoModal";
import CarouselComponent from "./CarouselComponent";

const d1Images = [
  {
    original:
      "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital1-01.jpg",
    thumbnail:
      "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital1-01.jpg",
  },
  {
    original:
      "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital1-02.jpg",
    thumbnail:
      "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital1-02.jpg",
  },
  {
    original:
      "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital1-03.jpg",
    thumbnail:
      "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital1-03.jpg",
  },
  {
    original:
      "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital1-04.jpg",
    thumbnail:
      "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital1-04.jpg",
  },
];

const d7Images = [
  {
    original:
      "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/top/clinic-02.jpeg",
    thumbnail:
      "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/top/clinic-02.jpeg",
  },
  {
    original:
      "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital2-01.jpg",
    thumbnail:
      "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital2-01.jpg",
  },
  {
    original:
      "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital2-02.jpg",
    thumbnail:
      "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital2-02.jpg",
  },
  {
    original:
      "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital2-03.jpg",
    thumbnail:
      "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital2-03.jpg",
  },
];
// const hnImages = [
//   "/dym_hn/1.jpg",
//   "/dym_hn/2.jpg",
//   "/dym_hn/3.jpg",
//   "/dym_hn/4.jpg",
//   "/dym_hn/5.jpg",
//   "/dym_hn/6.jpg",
//   "/dym_hn/7.jpg",
//   "/dym_hn/8.jpg",
//   // "/dym_hn/9.jpg",
//   "/dym_hn/10.jpg",
//   "/dym_hn/11.jpg",
//   "/dym_hn/12.jpg",
//   "/dym_hn/13.jpg",
//   "/dym_hn/14.jpg",
//   "/dym_hn/15.jpg",
//   "/dym_hn/16.jpg",
//   "/dym_hn/17.jpg",
//   "/dym_hn/18.jpg",
//   "/dym_hn/19.jpg",
//   "/dym_hn/20.jpg",
//   "/dym_hn/21.jpg",
//   // "/dym_hn/22.jpg",
//   "/dym_hn/23.jpg",
//   "/dym_hn/24.jpg",
//   "/dym_hn/25.jpg",
//   "/dym_hn/26.jpg",
//   "/dym_hn/27.jpg",
//   "/dym_hn/28.jpg",
//   "/dym_hn/29.jpg",
//   "/dym_hn/30.jpg",
//   "/dym_hn/31.jpg",
//   "/dym_hn/32.jpg",
// ];

const hnImages = [
  {
    original:
      "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/top/clinic-03.jpeg",
    thumbnail:
      "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/top/clinic-03.jpeg",
  },
  {
    original:
      "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital3-01.jpg",
    thumbnail:
      "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital3-01.jpg",
  },
  {
    original:
      "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital3-02.jpg",
    thumbnail:
      "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital3-02.jpg",
  },
  {
    original:
      "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital3-03.jpg",
    thumbnail:
      "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital3-03.jpg",
  },
  {
    original:
      "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital3-04.jpg",
    thumbnail:
      "https://dymmedicalcenter.com.vn/wp-content/themes/clinic/img/clinic/hospital3-04.jpg",
  },
];

export default function Application() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalTitle, setModalTitle] = useState("");
  const [videoURL, setVideoURL] = useState("");

  return (
    <div>
      <Breadcrumbs className="py-2 px-4">
        <BreadcrumbItem>
          <Link href={HOME} className="text-gray-500 text-md">
            Trang chủ
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>Đặt hẹn khám</BreadcrumbItem>
      </Breadcrumbs>
      <Tabs
        color="primary"
        aria-label="Options"
        className="flex justify-center items-center pt-5"
      >
        <Tab key="Hồ Chí Minh" title="Hồ Chí Minh" className="py-5">
          <Card>
            <CardBody>
              <div className="py-1 mx-auto">
                <div className="grid-cols-1 sm:grid md:grid-cols-2">
                  <div className="mx-1 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                    <CarouselComponent images={d1Images} />
                    <div className="p-6">
                      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        DYM MEDICAL CENTER QUẬN 1
                      </h5>
                      <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
                        Phòng B103, Tầng hầm 1, tòa nhà mPlaza Saigon, số 39 Lê
                        Duẩn, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh,
                        Việt Nam
                      </p>
                      <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
                        07h30 - 17h00
                      </p>
                      <div className="mt-4">
                        <Link
                          href="tel:02835210170"
                          className="mx-1 py-2 px-4 bg-rose-500 text-white rounded-xl"
                        >
                          Gọi ngay
                        </Link>
                        <Link
                          href={BOOKING_HCM_D1}
                          className="mx-1 py-2 px-4 bg-blue-500 text-white rounded-xl"
                        >
                          Đặt khám
                        </Link>
                        <Link
                          onClick={() => {
                            setModalTitle("CN Quận 1");
                            setVideoURL("/video/dym_mplaza_d1_hcm.mp4");
                            onOpen();
                          }}
                          className="mx-1 py-2 my-4 px-4 bg-green-500 text-white rounded-xl cursor-pointer"
                        >
                          Xem video giới thiệu
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 mx-1 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                    <CarouselComponent images={d7Images} />
                    <div className="p-6">
                      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        DYM MEDICAL CENTER PHÚ MỸ HƯNG
                      </h5>
                      <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
                        Phòng 3A01, Tầng 3A, Tòa nhà The Grace, 71 Hoàng Văn
                        Thái, Khu phố 1, Phường Tân Phú, Quận 7, Thành phố Hồ
                        Chí Minh, Việt Nam
                      </p>
                      <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
                        08h00 - 17h00
                      </p>
                      <div className="mt-4">
                        <Link
                          href="tel:02877710170"
                          className="mx-1 py-2 px-4 bg-rose-500 text-white rounded-xl"
                        >
                          Gọi ngay
                        </Link>
                        <Link
                          href={BOOKING_HCM_D7}
                          className="mx-1 py-2 px-4 bg-blue-500 text-white rounded-xl"
                        >
                          Đặt khám
                        </Link>
                        <Link
                          onClick={() => {
                            setModalTitle("CN Quận 7");
                            setVideoURL("/video/dym_the_grace_d7_hcm.mp4");
                            onOpen();
                          }}
                          className="mx-1 py-2 my-4 px-4 bg-green-500 text-white rounded-xl cursor-pointer"
                        >
                          Xem video giới thiệu
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="Hà Nội" title="Hà Nội" className="py-5">
          <Card>
            <CardBody>
              <div className="py-1 mx-auto">
                <div className="grid-cols-1 sm:grid md:grid-cols-2">
                  <div className="mx-1 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                    <CarouselComponent images={hnImages} />
                    <div className="p-6">
                      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        DYM MEDICAL CENTER HÀ NỘI
                      </h5>
                      <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
                        Tầng hầm B1, tòa Epic Tower, ngõ 19 Duy Tân, Phường Mỹ
                        Đình 2, Quận Nam Từ Liêm, Thành phố Hà Nội, Việt Nam
                      </p>
                      <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
                        08h00 - 17h00
                      </p>
                      <div className="mt-4">
                        <Link
                          href="tel:02477710170"
                          className="mx-1 py-2 px-4 bg-rose-500 text-white rounded-xl"
                        >
                          Gọi ngay
                        </Link>
                        <Link
                          href={BOOKING_HN_NTL}
                          className="mx-1 py-2 px-4 bg-blue-500 text-white rounded-xl"
                        >
                          Đặt khám
                        </Link>
                        <Link
                          onClick={() => {
                            setModalTitle("CN Hà Nội");
                            setVideoURL("/video/dym_epic_tower_ntl_hn.mp4");
                            onOpen();
                          }}
                          className="mx-1 py-2 my-4 px-4 bg-green-500 text-white rounded-xl cursor-pointer"
                        >
                          Xem video giới thiệu
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
      <VideoModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        modalTitle={modalTitle}
        videoURL={videoURL}
      />
    </div>
  );
}
