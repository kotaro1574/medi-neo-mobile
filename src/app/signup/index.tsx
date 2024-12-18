import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { z } from "zod";

const formSchema = z.object({
  userName: z.string().min(1, "所有者名を入力してください"),
  password: z.string().min(8, {
    message: "パスワードは8文字以上である必要があります。",
  }),
  facilityId: z.string().min(1, "所属施設を選択してください"),
});

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  const onSubmit = async ({
    userName,
    password,
  }: z.infer<typeof formSchema>) => {
    setLoading(true);
    // const { error } = await supabase.auth.signInWithPassword({
    //   email: `${id}@medineo.cc`,
    //   password: password,
    // });

    // if (error) Alert.alert("Sign Up Error", error.message);
    setLoading(false);
  };

  return (
    <View className="container max-w-[450px] bg-white py-[120px]">
      <Text className="text-center text-[24px] font-bold text-[#c2b37f]">
        ユーザー登録
      </Text>
      <View className="mt-[24px] p-10">
        <View>
          <Text className="text-[14px] text-neutral-400">id</Text>
          <Controller
            control={form.control}
            name="userName"
            render={({ field: { value, onChange } }) => (
              <Input
                className="mt-1"
                value={value}
                onChangeText={onChange}
                isError={!!form.formState.errors.userName}
              />
            )}
          />
          {form.formState.errors.userName && (
            <Text className="mt-1 text-xs text-destructive">
              {form.formState.errors.userName.message}
            </Text>
          )}
        </View>
        <View className="mt-4">
          <Text className="text-[14px] text-neutral-400">パスワード</Text>
          <Controller
            control={form.control}
            name="password"
            render={({ field: { value, onChange } }) => (
              <Input
                className="mt-1"
                value={value}
                onChangeText={onChange}
                secureTextEntry
              />
            )}
          />
        </View>
        <View className="mt-12">
          <Button disabled={loading} onPress={form.handleSubmit(onSubmit)}>
            {loading ? "登録中..." : "登録"}
          </Button>
        </View>
      </View>
    </View>
  );
}
