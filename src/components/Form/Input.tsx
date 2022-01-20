import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputLeftElement,
  InputGroup,
  forwardRef,
} from "@chakra-ui/react";

import {
  useState,
  useEffect,
  useCallback,
  ForwardRefRenderFunction,
} from "react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError | null;
  icon?: IconType;
}

type inputVariationOptions = {
  [key: string]: string;
};

const inputVariation: inputVariationOptions = {
  default: "gray.300",
  error: "red.500",
  focus: "purple.800",
  filled: "green.500",
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, icon: Icon, ...rest },
  ref
) => {
  const [variation, setVariation] = useState("default");

  const [value, setValue] = useState("");

  useEffect(() => {
    if (error) {
      return setVariation("error");
    }
  }, [error]);

  const handleInputFocus = useCallback(() => {
    if (!error) {
      return setVariation("focus");
    }
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      setVariation("filled");
    }
  }, [error, value]);

  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel color="gray.400">{label} </FormLabel>}

      <InputGroup flexDirection="column">
        {Icon && (
          <InputLeftElement color={inputVariation[variation]} mt="2.5">
            <Icon />
          </InputLeftElement>
        )}

        <ChakraInput
          name={name}
          bg="gray.50"
          color={inputVariation[variation]}
          borderColor={inputVariation[variation]}
          onChangeCapture={(e) => setValue(e.currentTarget.value)}
          onFocus={handleInputFocus}
          onBlurCapture={handleInputBlur}
          variant="outline"
          _hover={{ bgColor: "gray.100" }}
          _placeholder={{ color: "gray.400" }}
          size="lg"
          h="60px"
          ref={ref}
          {...rest}
        />

        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
