import { Header } from "@/components/layout/header";
import { Slot } from "expo-router";
import React from "react";

export default function DrawerLayout() {
  return (
    <>
      <Header profileName="ssss" />
      <Slot />
    </>
  );
}
