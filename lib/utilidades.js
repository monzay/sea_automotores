import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function combinadorClases(...inputs) {
  return twMerge(clsx(inputs));
}
export {
  combinadorClases
};
