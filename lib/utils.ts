import { techMap } from "@/constants/tecMap";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDevIconClassName = (techName: string) => {
  const normalizeTechName = techName.replace(/[ .]/g, "").toLowerCase();

  return techMap[normalizeTechName]
    ? `${techMap[normalizeTechName]} colored`
    : "devicon-react-plain";
};
