import { Text, View } from "react-native";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  id: z.string().min(1, "idを入力してください"),
  password: z.string(),
});

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <View className="container max-w-[450px] bg-white py-[120px]">
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
          <Button onPress={form.handleSubmit(onSubmit)}>ログイン</Button>
        </View>
      </View>
    </View>
  );
}
