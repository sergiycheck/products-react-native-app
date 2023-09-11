import {ProductDetails} from "./src/features/product-details/product-details";
import {Products} from "./src/features/products/products";
import {ScreenNames} from "./src/features/screen-names";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Stack.Navigator initialRouteName={ScreenNames.Products}>
      <Stack.Screen name={ScreenNames.Products} component={Products} />
      <Stack.Screen name={ScreenNames.ProductDetails} component={ProductDetails} />
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
