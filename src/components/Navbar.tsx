import type { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Link,
  Text
} from "@chakra-ui/react";
//import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = ["Início", "Serviços", "Sobre", "Contato"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={3}
    py={2}
    rounded="md"
    _hover={{ textDecoration: "none", bg: "gray.200", color: "black" }}
    href={"#" + children}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <Box
        width="50vw"
        bg="linear-gradient(45deg,rgba(27, 195, 207, 0.4) 0%, rgba(34, 188, 240, 0.4) 50%, rgba(22, 94, 145, 0.4) 100%)"
        backdropFilter="blur(5px)"
        borderRadius="20px"
        border="1px solid rgba(255, 255, 255, 0.3)"
        boxShadow={"0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 0 rgba(255, 255, 255, 0.1), inset 0 0 0px 0px rgba(255, 255, 255, 0)"}
        position="fixed"
        top={5}
        left="25vw"
        zIndex={10}
    >
        {/* Logo */}
        <Flex mt={2} justifyContent="center">
            <Text fontFamily="monospace" fontWeight="bold" fontSize="xl">
                Dev GustavoAndriani
            </Text>
        </Flex>
        <Flex mb={2} alignItems="center" justifyContent="space-evenly">

        {/* Links desktop */}
        <HStack gap={6} display={{ base: "none", md: "flex" }}>
          {Links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </HStack>

        {/* Botão extra (desktop) 
        <HStack display={{ base: "none", md: "flex" }}>
          <Button colorScheme="teal" size="sm">
            Entrar
          </Button>
        </HStack> */}

        {/* Botão menu mobile */}
        <IconButton
          size="md"
          //icon={open ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Abrir menu"
          display={{ md: "none" }}
          onClick={open ? onClose : onOpen}
        />
      </Flex>

      {/* Menu mobile */}
      {open ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" gap={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
            <Button colorScheme="teal" size="sm">
              Entrar
            </Button>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
