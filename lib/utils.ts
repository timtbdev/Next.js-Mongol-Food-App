import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBaseUrl(path: string = "") {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
      : process.env.NEXT_PUBLIC_WEB_URL || "https://timtb.dev";

  return `${baseUrl}${path}`;
}
