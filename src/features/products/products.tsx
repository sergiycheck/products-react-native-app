import {AddProductAbsolute, StyledContainer, StyledProductItem, StyledText} from "../../styled-app";
import {ScreenNames} from "../screen-names";

import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {Image} from "expo-image";
import {FlatList} from "react-native";
import {StyleSheet, View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

const baseURL = "https://fakestoreapi.com";

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
});

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

export const fetchProducts = async () => {
  const {data} = await axiosInstance.get<Product[]>("/products");
  return data;
};

export function Products({navigation}: {navigation: any}) {
  const {data, isLoading, isError, error} = useQuery({queryKey: ["products"], queryFn: fetchProducts});
  const insets = useSafeAreaInsets();

  return (
    <StyledContainer
      style={{
        // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <StyledText>Products!</StyledText>

      {isLoading && <StyledText>Loading...</StyledText>}

      {isError && <StyledText>Error!</StyledText>}

      {data && (
        <FlatList
          data={data}
          renderItem={({item}) => <ProductItem product={item} />}
          keyExtractor={(item) => `${item.id}`}
        />
      )}

      <AddProductAbsolute onPress={() => navigation.navigate(ScreenNames.AddProduct)}>
        <Icon name="add-outline" size={30} color="#fff" />
      </AddProductAbsolute>
    </StyledContainer>
  );
}

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const ProductItem = ({product}: {product: Product}) => {
  return (
    <StyledProductItem>
      <Image style={styles.image} source={product.image} placeholder={blurhash} contentFit="cover" transition={1000} />
      <StyledText>{product.title}</StyledText>
      <StyledText>{product.category}</StyledText>
      <StyledText>{product.price}</StyledText>
    </StyledProductItem>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    backgroundColor: "#0553",
    height: 200,
    width: "100%",
  },
});
