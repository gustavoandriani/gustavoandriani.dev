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
  Text,
  Icon
} from "@chakra-ui/react";
import { PiLightningFill } from "react-icons/pi";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const Links = ["Início", "Serviços", "Sobre", "Contato"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={3}
    py={2}
    rounded="md"
    transition="0.3s ease-in-out"
    color="white"
    _hover={{ textDecoration: "none", bg: "teal.400", color: "black" }}
    href={"#" + children}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <Box
      width="100%"
      color="white"
      bg="black"
      position="sticky"
      top={0}
      py={1}
      px={5}
      zIndex={10}
    >
      <Flex alignItems="center" justifyContent="space-between">

        {/* Logo */}
        <Flex justifyContent="center">
            <Text fontFamily="sans-serif" fontWeight="bold" fontSize="xl" color="white">
                Impulse
            </Text>
            <Icon color={"teal.400"}>
              <PiLightningFill />
            </Icon>
        </Flex>
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
          aria-label="Abrir menu"
          display={{ md: "none" }}
          onClick={open ? onClose : onOpen}
          transition="1s ease-in-out"
        >
          {open ? <IoMdClose /> : <IoMdMenu />}
        </IconButton>
      </Flex>

      {/* Menu mobile */}
      {open ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" gap={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
            {/*<Button colorScheme="teal" size="sm">
              Entrar
            </Button>*/}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
