import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View className="container max-w-[450px] py-[120px]">
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
          <TouchableOpacity className="inline-flex items-center justify-center text-md transition-colors disabled:opacity-50 disabled:pointer-events-none bg-[#FFCA0E] shadow-shadow text-white hover:bg-[#FFCA0E]/80 h-10 py-2 px-4 rounded-[90px]">
            <Text className="text-white">ログイン</Text>
          </TouchableOpacity>
          <TouchableOpacity className="mt-6 inline-flex items-center justify-center text-md transition-colors disabled:opacity-50 disabled:pointer-events-none bg-[#FFCA0E] shadow-shadow text-white hover:bg-[#FFCA0E]/80 h-10 py-2 px-4 rounded-[90px]">
            <Text className="text-white">新規登録</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
