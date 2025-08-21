import { Box, Heading, Text, Stack, SimpleGrid, Button, Icon, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { PiLightningFill } from "react-icons/pi";
import {
  PieChart, Pie, Cell, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend
} from "recharts";

const COLORS = ["#38B2AC", "#2C7A7B", "#81E6D9", "#E6FFFA"];

const pieData = [
  { name: "Aumento de Vendas", value: 40 },
  { name: "Mais Visibilidade", value: 30 },
  { name: "Credibilidade", value: 20 },
  { name: "Atendimento 24h", value: 10 },
];

const barData = [
  { name: "Antes", Vendas: 40, Leads: 30 },
  { name: "Depois", Vendas: 90, Leads: 80 },
];

export default function BeneficiosSection() {
  const [loading, setLoading] = useState(false);

  // Detecta orientação landscape em dispositivos pequenos
  const [isLandscape] = useMediaQuery([
    "(max-width: 900px) and (orientation: landscape)"
  ]);

  const handleLoading = (status: boolean) => {
    setTimeout(() => {
      setLoading(!status);
    }, 3000);
  };

  // Ajustes responsivos para gráficos
  const pieHeight = isLandscape ? 220 : 350;
  const barHeight = isLandscape ? 220 : 350;
  const pieRadius = isLandscape ? 60 : 100;

  return (
    <Box
      pt={10}
      pb={2}
      px={{ base: 2, md: 12 }}
      bg="black"
      minH={{ base: "100svh", md: "100dvh" }}
    >
      <Stack gap={8} textAlign="center">
        <Heading as="h2" size={{ base: "2xl", md: "3xl" }} color="white">
          Cresça com a{" "}
          <Text display="inline" fontFamily="sans-serif" fontWeight="bold" color="white">
            Impulse
          </Text>
          <Icon as={PiLightningFill} boxSize={6} color="teal.400" mt={-2} />
        </Heading>
        <Text fontSize="lg" color="white" maxW="800px" mx="auto">
          Um site profissional transforma a presença digital da sua empresa, aumentando
          o alcance, gerando mais clientes e fortalecendo sua marca.
        </Text>
      </Stack>

      <SimpleGrid
        columns={isLandscape ? 1 : { base: 1, md: 2 }}
        gap={6}
        mt={5}
      >
        {/* Gráfico de Pizza */}
        <Box
          p={{ base: 2, md: 6 }}
          mb={{ base: 4, md: 0 }}
          border="1px solid teal"
          borderRadius="md"
          boxShadow="md"
          bg="gray.900"
          transition="0.5s"
          _hover={{ bg: "teal.800", transform: "scale(1.03)" }}
          minH={pieHeight + 70}
        >
          <Heading as="h3" size="md" mb={4} p={2} color="white">
            Principais Benefícios
          </Heading>
          <ResponsiveContainer width="100%" height={pieHeight}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={pieRadius}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
              >
                {pieData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Box>

        {/* Gráfico de Barras */}
        <Box
          p={{ base: 2, md: 6 }}
          mb={{ base: 4, md: 0 }}
          border="1px solid teal"
          borderRadius="md"
          boxShadow="md"
          bg="gray.900"
          transition="0.5s"
          _hover={{ bg: "teal.800", transform: "scale(1.03)" }}
          minH={barHeight + 70}
        >
          <Heading as="h3" size="md" mb={4} p={2} color="white">
            Mudanças Visíveis
          </Heading>
          <ResponsiveContainer width="100%" height={barHeight}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Vendas" fill="#38B2AC" />
              <Bar dataKey="Leads" fill="#81E6D9" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </SimpleGrid>

      <Stack gap={8} mt={8} textAlign="center" color={"white"}>
        <Heading as="h2" size={{ base: "lg", md: "3xl" }} color="white">
          Transforme{" "}
          <Text fontWeight="bold" display="inline" color="teal.300">
            AGORA
          </Text>{" "}
          o rumo da sua empresa
        </Heading>
        <Text mt={-8}>
          Entre em contato{" "}
          <Text fontWeight="bold" display="inline" color="teal.300">
            IMEDIATAMENTE
          </Text>{" "}
          e vamos juntos, tornar a sua empresa{" "}
          <Text fontWeight="bold" display="inline" color="teal.300">
            VISÍVEL
          </Text>
          .
        </Text>
        <Button
          colorScheme="green"
          color="white"
          width={ isLandscape ? { md: "100%" } : { base: "95%", md: "20%" }}
          size="2xl"
          mx="auto"
          mb={10}
          px={8}
          variant="outline"
          _hover={{ bg: "green.700" }}
          loading={loading}
          onClick={() => { setLoading(!loading); handleLoading(!loading); }}
        >
          <a
            target="_blank"
            href="https://wa.me/5516996192224?text=Me%20ajuda%20a%20tornar%20minha%20empresa%20vis%C3%ADvel"
          >
            <Icon as={FaWhatsapp} mr={2} />
            Impulsionar minha empresa
          </a>
        </Button>
      </Stack>
    </Box>
  );
}