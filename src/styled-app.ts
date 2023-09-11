import styled from "styled-components/native";

export const StyledContainer = styled.View`
  background-color: papayawhip;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const StyledText = styled.Text`
  color: #bf4f74;
`;

export const StyledButton = styled.Button<{ $primary?: boolean; }>`
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  color: ${props => props.$primary ? "white" : "#BF4F74"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

export const AddProductAbsolute = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #BF4F74;
  align-items: center;
  justify-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
