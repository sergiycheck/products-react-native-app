import { ScreenNames } from "../../../App";
import { AddProductAbsolute, StyledButton, StyledContainer, StyledText } from "../../styled-app";
import Icon from 'react-native-vector-icons/Ionicons'

export function Products({ navigation }: { navigation: any }) {
  return (
    <StyledContainer>
      <StyledText>Products!</StyledText>

      <AddProductAbsolute onPress={() => navigation.navigate(ScreenNames.ProductDetails)} >
        <Icon name="add-outline" size={30} color="#fff" />
      </AddProductAbsolute>
    </StyledContainer>
  );
}
