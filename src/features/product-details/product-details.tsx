import {ScreenNames} from "../../../App";
import {StyledButton, StyledContainer, StyledText} from "../../styled-app";

export function ProductDetails({navigation}: {navigation: any}) {
  return (
    <StyledContainer>
      <StyledText>Product details!</StyledText>
      <StyledButton $primary title="Go back" onPress={() => navigation.navigate(ScreenNames.Products)} />
    </StyledContainer>
  );
}
