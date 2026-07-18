import { Text, Button, View } from "react-native";

function UserScreen({route, navigation}) {
  function openDrawerHandler() {
    navigation.toggleDrawer();
  }

  return (
    <View>
      <Text>User</Text>
      <Button title="Open Drawer" onPress={openDrawerHandler} />

    </View>
  )  
}

export default UserScreen;