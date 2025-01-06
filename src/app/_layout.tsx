import { AuthProvider } from "@/components/provider/auth-provider";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native";
import "../../global.css";

export default function RootLayout() {
  return (
    <SafeAreaView>
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </SafeAreaView>
  );
}
