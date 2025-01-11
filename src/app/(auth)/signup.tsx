import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FacilitiesSelect } from "@/feature/facilities/facilities-select";
import { supabase } from "@/lib/supabase/supabase";
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
    facilityId,
  }: z.infer<typeof formSchema>) => {
    setLoading(true);

    const { data: facility, error: facilityError } = await supabase
      .from("facilities")
      .select("name_en")
      .eq("id", facilityId)
      .single();

    if (facilityError) {
      throw facilityError;
    }

    const { data: user, error: userError } = await supabase
      .from("profiles")
      .select("id, login_id")
      .eq("facility_id", facilityId)
      .order("login_id");

    if (userError) {
      throw userError;
    }

    // login_idの末尾の数字を取得 login_idの編集が無い前提のcode
    const idNumber = !user.length
      ? 1
      : user[user.length - 1].login_id.match(/\d+/)
        ? Number(user[user.length - 1].login_id.match(/\d+/)) + 1
        : null;

    if (!idNumber) {
      throw new Error(
        "profileのlogin_idが取得できませんでした。login_idに数字が含まれているか確認してください。",
      );
    }

    const loginId = `${facility.name_en}${idNumber}`;

    const { data, error } = await supabase.auth.signUp({
      email: `${loginId}@medineo.cc`,
      password,
      options: {
        data: {
          loginId,
          userName,
          facilityId,
        },
      },
    });

    if (error) {
      throw error;
    }

    console.log(data);

    setLoading(false);
  };

  return (
    <View className="container h-screen max-w-[450px] bg-white py-[120px]">
      <Text className="text-center text-[24px] font-bold text-[#c2b37f]">
        ユーザー登録
      </Text>
      <View className="mt-[24px] p-10">
        <View>
          <Text className="text-[14px] text-neutral-400">所有者名</Text>
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
                isError={!!form.formState.errors.password}
                secureTextEntry
              />
            )}
          />
          {form.formState.errors.password && (
            <Text className="mt-1 text-xs text-destructive">
              {form.formState.errors.password.message}
            </Text>
          )}
        </View>
        <View className="mt-4">
          <Text className="text-[14px] text-neutral-400">所属施設</Text>
          <Controller
            control={form.control}
            name="facilityId"
            render={({ field: { value, onChange } }) => (
              <FacilitiesSelect
                onValueChange={onChange}
                defaultValue={value}
                isError={!!form.formState.errors.facilityId}
                className="mt-1"
              />
            )}
          />
          {form.formState.errors.facilityId && (
            <Text className="mt-1 text-xs text-destructive">
              {form.formState.errors.facilityId.message}
            </Text>
          )}
          <View className="mt-12">
            <Button disabled={loading} onPress={form.handleSubmit(onSubmit)}>
              {loading ? "登録中..." : "登録"}
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}
