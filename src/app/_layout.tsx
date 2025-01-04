import { Slot } from "expo-router";

// Import your global CSS file
import { Header } from "@/components/layout/header";
import { SafeAreaView } from "react-native";
import "../../global.css";

export default function RootLayout() {
  return (
    <SafeAreaView>
      <Header profileName="Profile" />
      <Slot />
    </SafeAreaView>
  );
}
