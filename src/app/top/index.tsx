import { Button } from "@/components/ui/button";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Text, View } from "react-native";

export default function Top() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View className="flex-1 justify-center">
        <Text className="pb-2.5 text-center">
          カメラに映すには許可が必要です
        </Text>
        <Button onPress={requestPermission}>許可する</Button>
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <View className="h-screen bg-white p-4">
      <CameraView
        style={{
          width: "100%",
          height: "70%",
          backgroundColor: "black",
          borderRadius: 24,
        }}
        facing={facing}
      />
      <View className="mt-4">
        <Button onPress={toggleCameraFacing}>Flip Camera</Button>
      </View>
    </View>
  );
}
