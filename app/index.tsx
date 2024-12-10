import { Button } from "@/components/ui/button";
import { Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <View className="container max-w-[450px] py-[120px] bg-white">
      <Text className="text-center text-[24px] font-bold text-[#c2b37f]">
        ログイン
      </Text>
      <View className="mt-[24px] p-10">
        <View>
          <Text className="text-[14px] text-neutral-400">id</Text>
          <TextInput className="mt-1 h-10 w-full rounded-[10px] border-[0.5px] border-[#A4A4A4] bg-white px-3 py-2 text-base text-black disabled:cursor-not-allowed disabled:opacity-50" />
        </View>
        <View className="mt-4">
          <Text className="text-[14px] text-neutral-400">パスワード</Text>
          <TextInput className="mt-1 h-10 w-full rounded-[10px] border-[0.5px] border-[#A4A4A4] bg-white px-3 py-2 text-base text-black disabled:cursor-not-allowed disabled:opacity-50" />
        </View>
        <View className="mt-12">
          <Button>ログイン</Button>
          <Button className="mt-4">新規登録</Button>
        </View>
      </View>
    </View>
  );
}
