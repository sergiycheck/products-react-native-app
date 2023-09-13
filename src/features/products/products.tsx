import React from "react";

import {AddProductAbsolute, StyledContainer, StyledProductItem, StyledText, imageStyles} from "../../styled-app";
import {Product, fetchProducts} from "../products-api";
import {ScreenNames} from "../screen-names";
import {blurhash} from "../utils";

import {useQuery, useQueryClient} from "@tanstack/react-query";
import {Image} from "expo-image";
import {FlatList, RefreshControl} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

export function Products({navigation}: {navigation: any}) {
  const [refreshing, setRefreshing] = React.useState(false);

  const {data, isLoading, isError, error} = useQuery({queryKey: ["products"], queryFn: fetchProducts});
  const queryClient = useQueryClient();

  const insets = useSafeAreaInsets();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      queryClient.resetQueries(["products"]);
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <StyledContainer
      style={{
        // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      {isLoading && <StyledText>Loading...</StyledText>}

      {isError && <StyledText>Error!</StyledText>}

      {data && (
        <FlatList
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
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

const ProductItem = ({product}: {product: Product}) => {
  return (
    <StyledProductItem>
      <Image
        style={imageStyles.image}
        source={product.image}
        placeholder={blurhash}
        contentFit="cover"
        transition={1000}
      />
      <StyledText>{product.title}</StyledText>
      <StyledText>{product.category}</StyledText>
      <StyledText>{product.price}</StyledText>
    </StyledProductItem>
  );
};
