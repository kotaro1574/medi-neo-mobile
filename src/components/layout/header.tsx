import { Link } from "expo-router";
import { Text, View } from "react-native";

type Props = {
  profileName: string;
};

export function Header({ profileName }: Props) {
  return (
    <View className="fixed top-0 z-40 w-full max-w-3xl bg-white">
      <View className="flex h-[54px] items-center justify-between space-x-4 px-4 py-3">
        <Link href="/">
          <View className="flex items-center gap-0.5 text-[#a4a4a4]">
            <Text>{profileName}</Text>
          </View>
        </Link>
      </View>
    </View>
  );
}
