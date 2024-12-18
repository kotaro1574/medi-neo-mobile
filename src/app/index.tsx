import { supabase } from "@/lib/supabase/supabase";
import { router } from "expo-router";
import { useEffect } from "react";

export default function IndexPage() {
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        router.replace("/top");
      } else {
        console.log("no user");
      }
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        router.replace("/top");
      } else {
        console.log("no user");
        router.replace("/login");
      }
    });
  }, []);
}
