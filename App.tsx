import {AddProduct} from "./src/features/add-product/add-product";
import {Products} from "./src/features/products/products";
import {ScreenNames} from "./src/features/screen-names";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {SafeAreaProvider} from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Stack.Navigator initialRouteName={ScreenNames.Products} screenOptions={{headerShown: false}}>
      <Stack.Screen name={ScreenNames.Products} component={Products} />
      <Stack.Screen name={ScreenNames.AddProduct} component={AddProduct} />
    </Stack.Navigator>
  );
}

const queryClient = new QueryClient();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <MyTabs />
        </QueryClientProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
