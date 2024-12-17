import { View, Text } from "react-native";

export default function Top() {
  return (
    <View className="container max-w-[450px] bg-white py-[120px]">
      <Text className="text-center text-[24px] font-bold text-[#c2b37f]">
        トップページ
      </Text>
      <View className="mt-[24px] p-10">
        <Text className="text-[14px] text-neutral-400">トップページです</Text>
      </View>
    </View>
  );
}
