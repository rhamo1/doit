import {
  Flex,
  Grid,
  Text,
  Image,
  Heading,
  VStack,
  Button,
  Box,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Input } from "../../components/Form/Input";
import LogoSecondary from "../../assets/logo-secondary.svg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const signInSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
});

interface SignInData {
  email: string;
  password: string;
}

export const Login = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = (data: SignInData) => console.log(data);

  return (
    <Flex
      padding={["10px 15px", "10px 15px", "0", "0"]}
      height={["auto", "auto", "100vh", "100vh"]}
      bgGradient={[
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-r, purple.800 65%, white 35%)",
        "linear(to-r, purple.800 65%, white 35%)",
      ]}
      alignItems="center"
      justifyContent="center"
      color="white"
    >
      <Flex
        w={["100%", "100%", "90%", "65%"]}
        flexDirection={["column", "column", "row", "row"]}
        justifyContent="center"
        alignItems="center"
      >
        <Grid w={["100%", "100%", "50%", "50%"]} paddingRight="100px">
          <Image
            src={LogoSecondary}
            alt="Doit"
            boxSize={["120px", "120px", "150px", "150px"]}
          />
          <Heading mt="4" as="h1">
            O jeito fácil, grátis
          </Heading>
          <Text maxW="350px">
            flexível e atrativo de gerenciar{" "}
            <b>seus projetos em uma única plataforma</b>
          </Text>
        </Grid>
        <Grid
          onSubmit={handleSubmit(handleSignIn)}
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
              w="100%"
              color="gray.300"
              bg="gray.100"
              h="60px"
              borderRadius="8px"
              _hover={{ background: "gray.2 00" }}
            >
              Cadastrar
            </Button>
          </VStack>
        </Grid>
      </Flex>
    </Flex>
  );
};
