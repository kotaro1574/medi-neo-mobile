import { cn } from "@/lib/utils";
import { View, StyleSheet, Platform } from "react-native";
import RNPickerSelect, { Item } from "react-native-picker-select";
import { ChevronDown } from "lucide-react-native";

type Props = {
  items: Item[];
  placeholder?: Item;
  value: string | null;
  onValueChange: (value: string) => void;
  className?: string;
  isError?: boolean;
};

const Select = ({
  items,
  placeholder,
  value,
  onValueChange,
  className,
  isError = false,
}: Props) => {
  return (
    <View
      className={cn(
        `w-full h-10 bg-white border-[0.5px] rounded-[10px] border-[#A4A4A4] overflow-hidden ${isError && "border-destructive"}`,
        className,
      )}
    >
      <RNPickerSelect
        items={items}
        placeholder={placeholder}
        value={value}
        onValueChange={onValueChange}
        useNativeAndroidPickerStyle={false}
        Icon={
          Platform.OS === "ios" || Platform.OS === "android"
            ? () => (
                <View className="right-2 top-2">
                  <ChevronDown size={20} color={"#A4A4A4"} />
                </View>
              )
            : undefined
        }
        style={pickerStyle}
      />
    </View>
  );
};

const pickerStyle = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    color: "black",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  inputIOSContainer: { pointerEvents: "none" },
  inputAndroid: {
    width: "100%",
    fontSize: 14,
    color: "black",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  inputWeb: {
    fontSize: 14,
    color: "black",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});

export { Select };
