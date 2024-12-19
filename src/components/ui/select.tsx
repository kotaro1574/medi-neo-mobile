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
};

const Select = ({
  items,
  placeholder,
  value,
  onValueChange,
  className,
}: Props) => {
  return (
    <View className={cn("w-full h-10 bg-white", className)}>
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
    borderWidth: 0.5,
    borderColor: "#A4A4A4",
    borderRadius: 10,
  },
  inputIOSContainer: { pointerEvents: "none" },
  inputAndroid: {
    fontSize: 14,
    color: "black",
    borderWidth: 0.5,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderColor: "#A4A4A4",
    borderRadius: 10,
  },
  inputWeb: {
    fontSize: 14,
    color: "black",
    borderWidth: 0.5,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderColor: "#A4A4A4",
    borderRadius: 10,
  },
});

export { Select };
