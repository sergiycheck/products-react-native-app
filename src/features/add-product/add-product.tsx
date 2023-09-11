import {StyledButton, StyledContainer, StyledText} from "../../styled-app";
import {ScreenNames} from "../screen-names";

export function AddProduct({navigation}: {navigation: any}) {
  return (
    <StyledContainer>
      <StyledText>Add product!</StyledText>
      <StyledButton $primary title="Go back" onPress={() => navigation.navigate(ScreenNames.Products)} />
    </StyledContainer>
  );
}
