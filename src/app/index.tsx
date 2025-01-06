import { useAuth } from "@/components/provider/auth-provider";
import { Redirect } from "expo-router";

export default function IndexPage() {
  const { session, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  return <Redirect href={session ? "/(app)" : "/login"} />;
}
