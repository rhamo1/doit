import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { SignupInfo } from "./SignupInfo";
import { SignupForm } from "./SignupForm";
import { GoBackButton } from "./GoBackButton";

const signUpSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
  confirm_password: yup
    .string()
    .required("Confirmação de senha obrigatório")
    .oneOf([yup.ref("password")], "Senhas não conferem"),
});

interface SignUpData {
  email: string;
  password: string;
  name: string;
  confirm_password: string;
  register: string;
}

export const SignUp = () => {
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: yupResolver(signUpSchema),
  });

  const handleSignUp = (data: SignUpData) => {
    console.log(data);
  };

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      padding={["10px 15px", "10px 15px", "0", "0"]}
      height={["auto", "auto", "100vh", "100vh"]}
      bgGradient={[
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-l, purple.800 65%, white 35%)",
        "linear(to-l, purple.800 65%, white 35%)",
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
        {isWideVersion ? (
          <>
            <GoBackButton top="160" left="35" />
            <SignupForm
              errors={errors}
              handleSignUp={handleSubmit(handleSignUp)}
              loading={loading}
              register={register}
            />
            <SignupInfo />
          </>
        ) : (
          <>
            <GoBackButton top="10" left="75vw" />
            <SignupInfo />
            <SignupForm
              errors={errors}
              handleSignUp={handleSubmit(handleSignUp)}
              loading={loading}
              register={register}
            />
          </>
        )}
      </Flex>
    </Flex>
  );
};
