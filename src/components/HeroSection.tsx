import { Box, Flex, Heading, Text, Button, Stack, Icon, Link, Image } from "@chakra-ui/react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
    const [loading, setLoading] = useState(false)

    interface HandleLoading {
        (status: boolean): void;
    }

    const handleLoading: HandleLoading = (status) => {
        setTimeout(() => {
            setLoading(!status)
        }, 3000)
    }
  return (
    <Box
      id="#Início"
      width={{ base: "120vw", md: "100%" }}
      height={{ base: "120vh", md: "100vh" }}
      bg={"black"}
      color="white"
      py={{ base: 10, md: 20 }}
      overflowX="hidden"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        height="100%"
        mx="auto"
      >
        {/* Texto */}
        <Stack gap={6} maxW="42vw" ml={{ base: 5, md: 10}}>
          <Text color="teal.300" fontWeight="bold" fontSize={{ base: "lg", md: "3xl" }}>
            Mude a visão da sua empresa
          </Text>
          <Heading as="h1" fontSize={{ base: "2xl", md: "5xl" }} fontWeight="bold" lineHeight="1.2">
           Torne a sua empresa <Text display="inline" color="teal.300">VISÍVEL</Text>
          </Heading>
          <Text fontSize={{ base: "lg", md: "2xl" }} color="gray.300">
            Transforme suas ideias em realidade, divulgue sua empresa e deixe a sua marca estampada na internet. Dê uma cara
            mais profissional para o seu empreendimento. <br /> Entre em contato imediatamente.
          </Text>

          <Stack direction={{ base: "column", sm: "row" }} gap={6}>
            <Link target="_blank" href="https://wa.me/5516996192224?text=Me%20ajuda%20a%20tornar%20minha%20empresa%20vis%C3%ADvel">
                <Button
                bg="green.700"
                color="white"
                size="lg"
                px={8}
                _hover={{ bg: "green.800" }}
                loading={loading} onClick={() => { setLoading(!loading); handleLoading(!status)}}
                >
                    <Icon>
                        <FaWhatsapp />
                    </Icon>
                    Impulsionar minha empresa
                </Button>
            </Link>
            <Button
                variant="outline"
                color="white"
                size="lg"
                px={8}
                _hover={{ bg: "gray.800" }}
            >
              Saber mais
            </Button>
          </Stack>
        </Stack>

        {/* Imagem */}
        <Box
            display={{ base: "none", md: "block" }}
            flex="1"
            height="100vh"
            width="100vw"
            bg="teal.400"
            clipPath="polygon(20% 0, 100% 0, 100% 100%, 0% 100%)"
            p="55px"
        >
            <Image 
                src="../../public/heroimg.png"
                ml="75px"
                transition="0.5s ease-in-out"
                _hover={{
                    transform: "scale(1.1)"
                }}
            />
        </Box>
      </Flex>
    </Box>
  );
}
