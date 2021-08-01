import React from "react";
import Link from "next/dist/client/link";
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
  Link as Anchor,
  Text,
} from "@chakra-ui/react";

import useInputValue from "@hooks/useInputValue";

interface UserFormProps {
  handleSubmit: (registerData: TRegister) => void;
  cta: string;
  bottomText: string;
  title: string;
  link: string;
  loading: boolean;
  altRoute: string;
}

const UserForm = (props: UserFormProps) => {
  const { handleSubmit, cta, bottomText, title, link, altRoute, loading } =
    props;
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
          handleSubmit({ email: email.value, password: password.value });
        }}
      >
        <FormControl id="email" isRequired isDisabled={loading}>
          <FormLabel>E-mail</FormLabel>
          <Input type="email" placeholder="Enter email" {...email} />
        </FormControl>
        <PasswordInput {...password} isDisabled={loading} />
        <Button type="submit" colorScheme="pink" isLoading={loading}>
          {cta}
        </Button>
      </Stack>
      <Stack direction="row" spacing={3}>
        <Text as="em">{bottomText}</Text>
        <Link href={altRoute}>
          <Anchor color="pink.500">{link}</Anchor>
        </Link>
      </Stack>
    </Stack>
  );
};

// TODO Refactor, divide in more components
function PasswordInput(props: InputProps) {
  const { isDisabled, ...rest } = props;
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl id="password" isRequired isDisabled={isDisabled}>
      <FormLabel>Password</FormLabel>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Enter password"
          {...rest}
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
