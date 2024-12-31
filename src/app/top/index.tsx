import { Button } from "@/components/ui/button";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { fetch } from "expo/fetch";
import { useState } from "react";
import { Alert, Platform, SafeAreaView, Text, View } from "react-native";

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
          <Button onPress={toggleCameraFacing}>カメラを切り替え</Button>
        </View>
        <View className="mt-4">
          <Button onPress={takePicture} disabled={isLoading}>
            {isLoading ? "処理中..." : "写真を撮影"}
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
