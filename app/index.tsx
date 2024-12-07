import { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View className="flex-1 items-center justify-center bg-gray-200">
      <Text className="text-2xl font-bold mb-4">モーダルが開くだけです</Text>

      {/* モーダルを開くボタン */}
      <TouchableOpacity
        onPress={() => setIsModalVisible(true)}
        className="mt-8 bg-blue-400 px-6 py-2 rounded-lg"
      >
        <Text className="text-white text-lg">開く</Text>
      </TouchableOpacity>

      {/* モーダルの表示 */}
      <Modal transparent={true} visible={isModalVisible} animationType="fade">
        <View className="flex-1 justify-center items-center bg-black bg-opacity-100">
          <View className="bg-white p-8 rounded-lg shadow-lg w-4/5 max-w-sm">
            <Text className="text-xl font-bold mb-4">開きました</Text>
            <View className="items-center">
              <TouchableOpacity
                onPress={() => setIsModalVisible(false)}
                className="bg-blue-400 px-6 py-2 rounded-lg"
              >
                <Text className="text-white font-semibold">閉じる</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
