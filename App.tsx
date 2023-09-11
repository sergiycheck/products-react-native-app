import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import { Products } from "./src/features/products/products";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductDetails } from "./src/features/product-details/product-details";

const Stack = createNativeStackNavigator();

export const ScreenNames = {
  Products: "Products",
  ProductDetails: "ProductDetails",
};

function MyTabs() {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.Products}
    >
      <Stack.Screen name={ScreenNames.Products} component={Products} />
      <Stack.Screen  name={ScreenNames.ProductDetails} component={ProductDetails} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
