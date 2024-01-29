"use client";
import { useState } from "react";
import { Button, Input, Link } from "@nextui-org/react";
import Navbar from "../Navbar";
import { useTranslations } from "next-intl";

export default function App() {
  const t = useTranslations();
  const [isVisible, setIsVisible] = useState(false);

  const togglFeVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="">
      <Navbar />
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img className="h-14 mr-2" src="/dym.png" alt="logo" />
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                {t("auth.forgotPassword.title")}
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <Input
                  type="email"
                  label={t("auth.email")}
                  variant="bordered"
                  className=""
                  autoFocus
                />

                <div className="flex items-center justify-between">
                  <div className="flex items-start"></div>
                  <Link href="/">
                    <p className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                      {t("auth.signIn.alreadyHaveAccount")}
                    </p>
                  </Link>
                </div>
                <Button color="primary" className="w-full">
                  {t("auth.submit")}
                </Button>
                <div className="flex font-light text-gray-500 dark:text-gray-400">
                  <p className="mr-1">{t("auth.signUp.dontHaveAccount")}</p>
                  <Link href="/signup">
                    <p className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                      {t("auth.signUp.text")}
                    </p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
