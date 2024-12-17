import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase/supabase";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Alert, SafeAreaView, Text, View } from "react-native";

export default function Top() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setUser(user);
      } else {
        Alert.alert("Error Accessing User");
      }
    });
  }, []);

  const doLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert("Error Signing Out User", error.message);
    }
  };

  return (
    <SafeAreaView>
      <View className="min-h-screen bg-[#F5F5F5] px-4 pb-8 pt-[62px]">
        <Text className="text-[20px] text-[#C2B37F]">アカウント情報</Text>
        <View className="mt-4 space-y-4 rounded-2xl bg-white p-4">
          <View>
            <Text className="text-[14px] text-neutral-400">ユーザー名</Text>
            <Input className="mt-1" value={user?.email} />
          </View>
          <View className="mt-4">
            <Text className="text-[14px] text-neutral-400">所属施設</Text>
            <Text className="mt-1">施設名</Text>
          </View>
        </View>
        <Button className="mt-4" onPress={() => {}}>
          更新
        </Button>
        <Button className="mt-4" onPress={doLogout} variant="destructive">
          ログアウト
        </Button>
      </View>
    </SafeAreaView>
  );
}
