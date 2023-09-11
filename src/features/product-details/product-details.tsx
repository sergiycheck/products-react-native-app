import {StyledButton, StyledContainer, StyledText} from "../../styled-app";
import {ScreenNames} from "../screen-names";

export function ProductDetails({navigation}: {navigation: any}) {
  return (
    <StyledContainer>
      <StyledText>Product details!</StyledText>
      <StyledButton $primary title="Go back" onPress={() => navigation.navigate(ScreenNames.Products)} />
    </StyledContainer>
  );
}
