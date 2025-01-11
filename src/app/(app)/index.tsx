import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icon";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { fetch } from "expo/fetch";
import { useState } from "react";
import {
  Alert,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Top() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [camera, setCamera] = useState<CameraView | null>(null);
  const [isLoading, setIsLoading] = useState(false);

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
    try {
      setIsLoading(true);
      if (!camera) throw new Error("カメラの準備ができていません。");

      const photo = await camera.takePictureAsync({
        base64: true,
        imageType: "jpg",
      });

      if (!photo?.base64) throw new Error("画像の取得に失敗しました。");

      const base64Data =
        Platform.OS === "web" ? photo.base64.split(",")[1] : photo.base64;

      const result = await recognizeFace(base64Data);

      if (result.success) {
        console.log(result.faceId);
        Alert.alert("成功", `顔認識が完了しました。FaceID: ${result.faceId}`);
      } else {
        Alert.alert("エラー", result.error || "顔認識に失敗しました。");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("エラー", "写真の撮影または顔認識中にエラーが発生しました。");
    } finally {
      setIsLoading(false);
    }
  };

  const recognizeFace = async (base64Data: string) => {
    try {
      const response = await fetch("http://192.168.3.7:8787/face-recognition", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ base64Data }),
      });

      const data = await response.json();

      return data;
    } catch (error) {
      console.error("API呼び出しエラー:", error);
      if (error instanceof Error) {
        console.error("エラーメッセージ:", error.message);
        console.error("エラースタック:", error.stack);
      }
      throw error;
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="h-screen bg-white p-4">
        <View className="relative h-[70%] overflow-hidden rounded-3xl">
          <CameraView
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "black",
            }}
            facing={facing}
            ref={setCamera}
          />
          <View className="absolute inset-x-2 bottom-2">
            <View
              style={{
                backgroundColor: "rgba(163, 163, 163, 0.4)",
              }}
              className="flex-row items-center gap-4 rounded-2xl px-2 py-2.5 backdrop-blur-sm"
            >
              <View className="size-10 flex-row items-center justify-center rounded-full bg-white">
                <Icons.user color={"black"} />
              </View>
              <Text className="text-xl">lastName firstName</Text>
            </View>
            <View
              style={{
                backgroundColor: "rgba(163, 163, 163, 0.4)",
              }}
              className="mt-2 flex-row items-center gap-4 rounded-2xl bg-[#A4A4A4]/40 px-2 py-2.5"
            >
              <View className="size-10 flex-row items-center justify-center rounded-full bg-white">
                <Icons.drug color={"black"} />
              </View>
              <Text className="text-xl">lastName firstName</Text>
            </View>
          </View>
        </View>
        <View className="relative mt-4 w-full flex-row items-center justify-center">
          <View className="absolute left-2 top-0">
            <Text>認証やり直し</Text>
          </View>
          <View>
            <TouchableOpacity onPress={takePicture}>
              <Icons.shutter color={"#dc2626"} />
            </TouchableOpacity>
          </View>
          <View className="absolute right-2 top-0">
            <TouchableOpacity onPress={toggleCameraFacing}>
              <Icons.switch color={"#000000"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
