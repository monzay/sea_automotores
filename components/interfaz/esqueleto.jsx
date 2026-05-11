import { combinadorClases } from "@/lib/utilidades";
function Skeleton({ className, ...props }) {
  return <div
    data-slot="skeleton"
    className={combinadorClases("bg-accent animate-pulse rounded-md", className)}
    {...props}
  />;
}
export {
  Skeleton
};
