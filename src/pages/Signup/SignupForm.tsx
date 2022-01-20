import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Input } from "../../components/Form/Input";

interface LoginFormProps {
  handleSignUp: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<SignUpData>;
  loading: boolean;
}

interface SignUpData {
  email: string;
  name: string;
  password: string;
  confirm_password: string;
  register: string;
}

export const SignupForm = ({
  handleSignUp,
  errors,
  register,
  loading,
}: LoginFormProps) => (
  <Grid
    onSubmit={handleSignUp}
    as="form"
    mt={["4", "4", "0 "]}
    w={["100%", "100%", "40%", "40%"]}
    padding="40px 25px"
    border="3px solid"
    borderColor="gray.100"
    bg="white"
    color="gray.900"
  >
    <Heading size="lg">Faça seu cadastro</Heading>
    <VStack mt="6" spacing="5">
      <Box w="100%" mt="1" ml="1" color="gray.300">
        <Input
          placeholder="Digite seu nome"
          icon={FaUser}
          label="Nome"
          error={errors.name}
          {...register("name")}
        />
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
        label="Senha"
        icon={FaLock}
        error={errors.password}
        type="password"
        {...register("password")}
      />
      <Input
        placeholder="Confirme sua senha"
        label="Confirmação de senha"
        icon={FaLock}
        error={errors.confirm_password}
        type="password"
        {...register("confirm_password")}
      />
    </VStack>
    <Button
      mt="8"
      isLoading={loading}
      type="submit"
      w="100%"
      color="white"
      bg="purple.800"
      h="60px"
      borderRadius="8px"
      _hover={{ background: "purple.900" }}
    >
      Finalizar cadastro
    </Button>
  </Grid>
);
