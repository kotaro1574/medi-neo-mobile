import { Link } from "expo-router";
import { Text, View } from "react-native";
import { Icons } from "../ui/icon";

type Props = {
  profileName: string;
};

export function Header({ profileName }: Props) {
  return (
    <View className="fixed top-0 z-40 w-full max-w-3xl bg-white">
      <View className="h-[54px] flex-row items-center justify-between space-x-4 px-4 py-3">
        <Link href="/">
          <View className="flex-row items-center gap-0.5 text-[#a4a4a4]">
            <View>
              <Icons.fillUser color="#a4a4a4" />
            </View>
            <View>
              <Text>{profileName}</Text>
            </View>
          </View>
        </Link>
        <View>
          <Icons.hamburger color="#a4a4a4" />
        </View>
      </View>
    </View>
  );
}
