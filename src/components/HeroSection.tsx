import { Box, Flex, Heading, Text, Button, Stack, Icon, Image } from "@chakra-ui/react";
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
      width="100%"
      height="100vh"
      bg={"black"}
      color="white"
      px={{ base: 10, md: 0}}
      py={{ base: 5, md: 20 }}
      overflowX="hidden"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        height="100%"
        mx={{base: "none", md: "auto"}}
      >
        {/* Texto */}
        <Stack gap={6} maxW={{ base: "100vw", md: "42vw" }} ml={{ base: 5, md: 10}}>
          <Text color="teal.300" fontWeight="bold" fontSize={{ base: "lg", md: "3xl" }}>
            Mais clientes, mais credibilidade, mais resultados.
          </Text>
          <Heading as="h1" fontSize={{ base: "2xl", md: "5xl" }} fontWeight="bold" lineHeight="1.2">
           Torne a sua empresa <Text display="inline" color="teal.300">VISÍVEL</Text>
          </Heading>
          <Text fontSize={{ base: "lg", md: "2xl" }} color="gray.300">
            Transforme suas ideias em realidade, divulgue sua empresa e coloque a sua marca <Text fontWeight="bold" display="inline" color="teal.300">NO MUNDO</Text>. 
            <br />
            Seu próximo grande passo começa <Text fontWeight="bold" display="inline" color="teal.300">AQUI</Text>.
            <br />
            Entre em contato <Text fontWeight="bold" display="inline" color="teal.300">AGORA!</Text>
          </Text>

          <Stack direction={{ base: "column", sm: "row" }} gap={6}>
            <Button
            bg="green.700"
            color="white"
            size="lg"
            px={8}
            _hover={{ bg: "green.800" }}
            loading={loading} onClick={() => { setLoading(!loading); handleLoading(!loading)}}
            >
              <a target="_blank" href="https://wa.me/5516996192224?text=Me%20ajuda%20a%20tornar%20minha%20empresa%20vis%C3%ADvel">
                <Icon mr={2}>
                    <FaWhatsapp />
                </Icon>
                Impulsionar minha empresa
              </a>
            </Button>
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
            flex="1"
            height="100vh"
            width="100vw"
            bg="teal.400"
            clipPath={{ base:"none", md:"polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}
            p={{ base: 2, md:"55px" }}
        >
            <Image 
                src="/heroimg.png"
                ml={{ base: 0, md:"75px" }}
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
