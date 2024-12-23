import { Button } from "@/components/ui/button";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";

export default function Top() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [camera, setCamera] = useState<CameraView | null>(null);

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

  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  const takePicture = async () => {
    if (camera) {
      const photo = await camera.takePictureAsync();
      console.log(photo);
      // ここで撮影した写真を処理（保存、表示など）
    }
  };

  return (
    <SafeAreaView>
      <View className="h-screen bg-white p-4">
        <View className="h-[70%] overflow-hidden rounded-3xl">
          <CameraView
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "black",
            }}
            facing={facing}
            ref={setCamera}
          />
        </View>
        <View className="mt-4">
          <Button onPress={toggleCameraFacing}>Flip Camera</Button>
        </View>
        <View className="mt-4">
          <Button onPress={takePicture}>Take Picture</Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
