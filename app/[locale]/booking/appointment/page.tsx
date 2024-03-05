"use client";
import { APPOINTMENT, BOOKING, HOME } from "@/route";
import {
  Accordion,
  AccordionItem,
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Link,
} from "@nextui-org/react";

export default function Appointment() {
  return (
    <div>
      <Breadcrumbs className="py-2 px-4">
        <BreadcrumbItem>
          <Link href={HOME} className="text-gray-500 text-md">
            Trang chủ
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link href={BOOKING} className="text-gray-500 text-md">
            Đặt hẹn khám
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>Đặt hẹn khám</BreadcrumbItem>
      </Breadcrumbs>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Đặt hẹn khám
          </h2>
        </div>
      </div>
    </div>
  );
}
