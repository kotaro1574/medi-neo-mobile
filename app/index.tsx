import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="container max-w-[450px] py-[120px] bg-white">
      <Text className="text-center text-[24px] font-bold text-[#c2b37f]">
        ログイン
      </Text>
      <View className="mt-[24px] p-10">
        <View>
          <Text className="text-[14px] text-neutral-400">id</Text>
          <Input className="mt-1" />
        </View>
        <View className="mt-4">
          <Text className="text-[14px] text-neutral-400">パスワード</Text>
          <Input className="mt-1" />
        </View>
        <View className="mt-12">
          <Button>ログイン</Button>
          <Button className="mt-4">新規登録</Button>
        </View>
      </View>
    </View>
  );
}
