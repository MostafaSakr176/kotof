"use client";
import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import dynamic from "next/dynamic";
const Dropdown = dynamic(() => import("../dropdown/Dropdown"), {
  ssr: false, // Disable SSR for this component
});
import { useDirection } from "../../_contexts/DirectionContext";

import englishFlag from "@/media/englishFlag.png";
import arabicFlag from "@/media/arabicFlag.png";

const options = [
  { option: "Arabic", img: arabicFlag },
  { option: "English", img: englishFlag },
];

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { direction, setDirection ,toggleDirection} = useDirection();

  
// Ensure consistent rendering between server and client
const isClient = typeof window !== 'undefined';
const initialDirection = isClient ? localStorage.getItem('direction') : 'ltr';

  useEffect(() => {
    if (pathname.startsWith("/ar")) {
      setDirection("rtl");
    } else {
      setDirection("ltr");
    }
  }, [pathname, setDirection]);

  const handleSelect = (selected: { option: string }) => {
    if (selected.option === "Arabic") {
      router.push("/ar");
      toggleDirection();

    } else {
      router.push("/en");
      toggleDirection();

    }
  };

  return (
    <Dropdown
      options={options}
      onSelect={handleSelect}
      placeholder={direction === "rtl" ? options[0] : options[1]}
      selected={initialDirection === "rtl" ? options[0] : options[1]}
    />
  );
};

export default LanguageSwitcher;
