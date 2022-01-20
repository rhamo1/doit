import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaForward, FaVials } from "react-icons/fa";
import { theme } from "../../styles/theme";

export const SignupInfo = () => (
  <Grid w={["100%", "100%", "50%", "50%"]} paddingLeft="100px">
    <VStack>
      <Flex w="100%">
        <Center borderRadius="5px" bg="white" w="50px" h="50px">
          <FaForward color={theme.colors.purple["800"]} size={25} />
        </Center>
        <Box ml="4">
          <Heading size="lg">Agilidade</Heading>
          <Text>
            Agilize seus trabalhos com rapidez <br /> e muita performance
          </Text>
        </Box>
      </Flex>
      <Flex w="100%">
        <Center borderRadius="5px" bg="white" w="50px" h="50px">
          <FaVials color={theme.colors.purple["800"]} size={25} />
        </Center>
        <Box ml="4">
          <Heading size="lg">Simplicidade</Heading>
          <Text>
            Armazene seus projetos em uma <br /> interface altamente usual
          </Text>
        </Box>
      </Flex>
    </VStack>
  </Grid>
);
