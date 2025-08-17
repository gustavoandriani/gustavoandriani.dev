import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Avatar,
  VStack,
  HStack,
  Icon,
  Button,
} from "@chakra-ui/react";
import { FaStar, FaWhatsapp } from "react-icons/fa";
import { PiLightningFill } from "react-icons/pi";

interface Review {
  id: number;
  name: string;
  avatar?: string;
  rating: number;
  comment: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Diego - UltimateGeekCon",
    rating: 5,
    comment: "Serviço excelente! Super recomendo. Meu evento tomou outras proporções depois da Impulse.",
    date: "10/07/2024",
  },
  {
    id: 2,
    name: "João Silva - DATAByte",
    rating: 5,
    comment: "Depois da Impulse, minha empresa expandiu muito. Passando mais credibilidade, consegui converter mais clientes.",
    date: "03/03/2025",
  },
  {
    id: 3,
    name: "Carla Mendes - DocesDaCah",
    rating: 5,
    comment: "Profissional, muito atencioso e competente.",
    date: "23/05/2025",
  },
];

const AvaliacoesSection: React.FC = () => {
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
    <Box py={12} px={6} bg="teal.500">
        <Heading mb={5} textAlign={"center"} as="h2" size={{ base: "2xl", md: "3xl" }} color="black">
            Por que confiar na <Text display="inline" fontFamily="sans-serif" fontWeight="bold">Impulse</Text><Icon size={"sm"} marginTop={-5} color={"black"}><PiLightningFill /></Icon>?
        </Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
        {reviews.map((review) => (
          <Box
            key={review.id}
            bg="black"
            p={6}
            rounded="xl"
            shadow="md"
            _hover={{ shadow: "lg", transform: "translateY(-4px)" }}
            transition="0.2s"
          >
            <VStack align="start" gap={4}>
              <HStack gap={3}>
                <Avatar.Root size={"lg"}>
                    <Avatar.Fallback name={review.name} />
                    <Avatar.Image src={review.avatar} />
                </Avatar.Root>

                <Box>
                  <Text fontWeight="bold" color={"white"}>{review.name}</Text>
                  <Text fontSize="sm" color="gray.500">
                    {review.date}
                  </Text>
                </Box>
              </HStack>

              <HStack gap={1}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon
                    key={i}
                    as={FaStar}
                    color={i < review.rating ? "yellow.400" : "gray.300"}
                  />
                ))}
              </HStack>

              <Text fontSize="md" color="gray.400">
                "{review.comment}"
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>

      <VStack gap={4} mt={8} color="black">
        <Heading fontSize="2xl">
          Junte-se a dezenas de clientes satisfeitos!
        </Heading>
        <Text fontSize="lg" maxW="600px">
          Seu projeto também merece um serviço de qualidade. Solicite agora um
          orçamento e descubra porque nossos clientes confiam na gente.
        </Text>
        <Button
            bg={"black"}
            color="white"
            size="2xl"
            px={8}
            _hover={{ bg: "gray.800" }}
            loading={loading} onClick={() => { setLoading(!loading); handleLoading(!loading)}}
        >
            <a target="_blank" href="https://wa.me/5516996192224?text=Me%20ajuda%20a%20tornar%20minha%20empresa%20vis%C3%ADvel">
                <Icon mr={2}>
                    <FaWhatsapp />
                </Icon>
                <Text display="inline" fontFamily="sans-serif" fontWeight="bold">Impulsionar</Text> <Icon size={"sm"} marginTop={-4} color={"teal.500"}><PiLightningFill /></Icon>
            </a>
        </Button>
      </VStack>
    </Box>
  );
};

export default AvaliacoesSection;
