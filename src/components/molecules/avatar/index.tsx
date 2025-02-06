import {
  Avatar as AvatarUI,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { useSession } from "next-auth/react";

export function Avatar() {
  const { status, data } = useSession();

  return (
    <AvatarUI>
      <AvatarImage src={data?.user?.image || ""} alt={data?.user?.name || ""} />
      <AvatarFallback>?</AvatarFallback>
    </AvatarUI>
  );
}
