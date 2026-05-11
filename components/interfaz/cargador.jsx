import { Loader2Icon } from "lucide-react";
import { combinadorClases } from "@/lib/utilidades";
function Spinner({ className, ...props }) {
  return <Loader2Icon
    role="status"
    aria-label="Loading"
    className={combinadorClases("size-4 animate-spin", className)}
    {...props}
  />;
}
export {
  Spinner
};
