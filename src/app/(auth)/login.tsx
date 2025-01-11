import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase/supabase";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, Text, View } from "react-native";
import { z } from "zod";

const formSchema = z.object({
  id: z.string().min(1, "idを入力してください"),
  password: z.string(),
});

export default function Login() {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      password: "",
    },
  });

  const onSubmit = async ({ id, password }: z.infer<typeof formSchema>) => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: `${id}@medineo.cc`,
      password: password,
    });

    if (error) Alert.alert("Sign Up Error", error.message);
    setLoading(false);
  };

  return (
    <View className="container h-screen max-w-[450px] bg-white py-[120px]">
      <Text className="text-center text-[24px] font-bold text-[#c2b37f]">
        ログイン
      </Text>
      <View className="mt-[24px] p-10">
        <View>
          <Text className="text-[14px] text-neutral-400">id</Text>
          <Controller
            control={form.control}
            name="id"
            render={({ field: { value, onChange } }) => (
              <Input
                className="mt-1"
                value={value}
                onChangeText={onChange}
                isError={!!form.formState.errors.id}
              />
            )}
          />
          {form.formState.errors.id && (
            <Text className="mt-1 text-xs text-destructive">
              {form.formState.errors.id.message}
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
            {loading ? "ログイン中..." : "ログイン"}
          </Button>
          <Link className="mt-4" href="/signup" asChild>
            <Button>新規登録</Button>
          </Link>
        </View>
      </View>
    </View>
  );
}
