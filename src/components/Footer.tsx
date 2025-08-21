import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  IconButton,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { PiLightningFill } from 'react-icons/pi';

const Footer: React.FC = () => {
  return (
    <Box
      bg={'gray.900'}
      color={'gray.200'}
      as="footer"
      py={6}
      w="full"
    >
      <Container as={Stack} maxW="6xl" gap={4}>
        <Stack direction={{ base: 'column', md: 'row' }} gap={4} align="center" justify="space-between">
            <Text fontSize="xl" fontWeight="bold" color="white">
                <Text display="inline" fontFamily="sans-serif" fontWeight="bold">
                    Impulse
                </Text>
                <Icon size={"sm"} marginTop={-5} color={"teal.400"}><PiLightningFill /></Icon>
            </Text>
            {/*© {new Date().getFullYear()}*/}
          <HStack gap={4}>
            <Link href="https://github.com/gustavoandriani">
                <IconButton
                color={"white"}
                aria-label="GitHub"
                variant="ghost"
                size="lg"
                >
                    <FaGithub />
                </IconButton>
            </Link>
            {/*}
            <Link href="https://linkedin.com/in/seuusuario" >
                <IconButton
                aria-label="LinkedIn"
                variant="ghost"
                size="lg"
                >
                    <FaLinkedin />
                </IconButton>
            </Link>
            <Link href="https://twitter.com/seuusuario" >
                <IconButton
                aria-label="Twitter"
                variant="ghost"
                size="lg"
                >
                    <FaTwitter />
                </IconButton>
            </Link>
            */}
          </HStack>
        </Stack>
        <Text fontSize="sm" alignSelf="center" mt={2}>
          Desenvolvido com ♥ por <Link target='_blank' href="https://github.com/gustavoandriani" color="teal.500" >Gustavo Andriani</Link>
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;