import { cn } from "@/lib/utils";
import { View, StyleSheet, Platform } from "react-native";
import RNPickerSelect, { Item } from "react-native-picker-select";

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
                <View
                  style={{
                    top: 10,
                    right: 10,
                    backgroundColor: "transparent",
                    borderTopWidth: 10,
                    borderTopColor: "#c2b37f",
                    borderRightWidth: 10,
                    borderRightColor: "transparent",
                    borderLeftWidth: 10,
                    borderLeftColor: "transparent",
                    width: 0,
                    height: 0,
                  }}
                />
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
