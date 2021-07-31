import React, { FormEventHandler, MouseEventHandler } from "react";
import {
  Stack,
  Button,
  InputGroup,
  Input,
  InputRightElement,
  FormControl,
  FormLabel,
  InputProps,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";

import useInputValue from "@hooks/useInputValue";

interface UserFormProps {
  handleSubmit: FormEventHandler;
  cta: string;
  bottomText: string;
  title: string;
  link: string;
  handleRegister: MouseEventHandler<HTMLAnchorElement>;
}

const UserForm = (props: UserFormProps) => {
  const { handleSubmit, cta, bottomText, title, link, handleRegister } = props;
  const email = useInputValue("");
  const password = useInputValue("");

  return (
    <Stack alignItems="center" flex={1} spacing={6} py={8}>
      <Heading as="h2">{title}</Heading>
      <Stack
        spacing={6}
        as="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <FormControl id="email" isRequired>
          <FormLabel>E-mail</FormLabel>
          <Input type="email" placeholder="Enter email" {...email} />
        </FormControl>
        <PasswordInput {...password} />
        <Button type="submit" colorScheme="pink">
          {cta}
        </Button>
      </Stack>
      <Stack direction="row" spacing={3}>
        <Text as="em">{bottomText}</Text>
        <Link color="pink.500" onClick={handleRegister}>
          {link}
        </Link>
      </Stack>
    </Stack>
  );
};

function PasswordInput(props: InputProps) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl id="password" isRequired>
      <FormLabel>Password</FormLabel>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Enter password"
          {...props}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}

export default UserForm;
