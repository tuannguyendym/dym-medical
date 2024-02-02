"use client";
import { NextUIProvider } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const getAuthKey = async () => {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_MCLINIC_API_URL + "/medicalrecord/GetToken",
        {
          headers: {
            api_key: process.env.NEXT_PUBLIC_MCLINIC_API_KEY,
          },
        }
      );
      // console.log(res.data);
      localStorage.setItem("auth_key", JSON.stringify(res.data.Data.auth_key));
      localStorage.setItem("ExpireTimeUTC", JSON.stringify(res.data.Data.ExpireTimeUTC));
    } catch (error) {
      // Handle errors
      return error;
    }
  };

  useEffect(() => {
  const auth_key = localStorage.getItem("auth_key") || "";
    if (auth_key == "") getAuthKey();
  }, []);

  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
}
