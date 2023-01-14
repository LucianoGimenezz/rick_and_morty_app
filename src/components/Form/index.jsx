import {
  Container,
  FormStyle,
  Input,
  Label,
  ButtonLogin,
  DivStyle,
  Side,
} from "./styles";

export const Form = () => {
  return (
    <Container>
      <Side>
        <img
          src="https://assets.stickpng.com/images/58f37720a4fa116215a9240f.png"
          alt="Rick and Morty Logo"
        />
      </Side>
      <FormStyle>
        <DivStyle>
          <Input required type="email" />
          <Label>Email</Label>
        </DivStyle>
        <DivStyle>
          <Input required type="password" />
          <Label>Password</Label>
        </DivStyle>
        <ButtonLogin>Log in</ButtonLogin>
      </FormStyle>
    </Container>
  );
};
