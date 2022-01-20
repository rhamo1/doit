import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

import { FaEnvelope, FaLock } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { Input } from "../../components/Form/Input";

interface LoginFormProps {
  handleSignIn: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<SignInData>;
  loading: boolean;
}

interface SignInData {
  email: string;
  password: string;
  register: string;
}

export const LoginForm = ({
  handleSignIn,
  errors,
  register,
  loading,
}: LoginFormProps) => {
  const history = useHistory();

  return (
    <Grid
      onSubmit={handleSignIn}
      as="form"
      mt={["4", "4", "0 "]}
      w={["100%", "100%", "40%", "40%"]}
      padding="30px 15px"
      border="3px solid"
      borderColor="gray.100"
      bg="white"
      color="gray.900"
    >
      <Heading size="lg">Bem-vinde de volta!</Heading>
      <VStack mt="6" spacing="5">
        <Box w="100%" mt="1" ml="1" color="gray.300">
          <Input
            placeholder="Digite seu email"
            icon={FaEnvelope}
            label="Login"
            type="email"
            error={errors.email}
            {...register("email")}
          />
          {!errors.email && <Text>Exemplo: nome@email.com</Text>}
        </Box>
        <Input
          placeholder="Digite sua senha"
          icon={FaLock}
          label="Senha"
          error={errors.password}
          type="password"
          {...register("password")}
        />
      </VStack>
      <VStack mt="4" spacing="5">
        <Button
          isLoading={loading}
          type="submit"
          w="100%"
          color="white"
          bg="purple.800"
          h="60px"
          borderRadius="8px"
          _hover={{ background: "purple.900" }}
        >
          Entrar
        </Button>
        <Text color="gray.400">Ainda não possui uma conta?</Text>
        <Button
          onClick={() => history.push("/signup")}
          w="100%"
          color="gray.400"
          bg="gray.100"
          h="60px"
          borderRadius="8px"
          _hover={{ background: "gray.300" }}
        >
          Cadastrar
        </Button>
      </VStack>
    </Grid>
  );
};
