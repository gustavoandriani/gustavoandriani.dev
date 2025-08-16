import { Box, Heading, Text, Stack, SimpleGrid, Button, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { PiLightningFill } from "react-icons/pi";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

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
    <Box pt={10} pb={24} px={{ base: 4, md: 12 }} bg="black" height={{ base:"245dvh", md:"100dvh" }}>
      <Stack gap={8} textAlign="center">
        <Heading as="h2" size={{ base: "lg", md: "3xl" }} color="white">
          Cresça com a <Text display="inline" fontFamily="sans-serif" fontWeight="bold" color="white">Impulse</Text><Icon size={"sm"} marginTop={-5} color={"teal.400"}><PiLightningFill /></Icon>
        </Heading>
        <Text fontSize="lg" color="white" maxW="800px" mx="auto">
          Um site profissional transforma a presença digital da sua empresa, aumentando
          o alcance, gerando mais clientes e fortalecendo sua marca.
        </Text>
      </Stack>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={10} mt={5}>
        
        {/* Gráfico de Pizza */}
        <Box p={{ base:0, md:6 }} mb={{ base:8, md:0 }} height="fit" border="1px solid teal" borderRadius="md" boxShadow="md" transition="0.5s ease-in-out" _hover={{ bg: "teal.800", scale: "1.05" }}>
          <Heading as="h3" size="md" mb={4} p={2}>
            Principais Benefícios
          </Heading>
          <ResponsiveContainer width="100%" minHeight={350} maxHeight={500}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
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
        <Box p={{ base:0, md:6 }} mb={{ base:8, md:0 }} border="1px solid teal" borderRadius="md" boxShadow="md" transition="0.5s ease-in-out" _hover={{ bg: "teal.800", scale: "1.05" }}>
          <Heading as="h3" size="md" mb={4} p={2}>
            Mudanças Visíveis
          </Heading>
          <ResponsiveContainer width="100%" minHeight={350} maxHeight={500}>
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

      <Stack gap={8} mt={8} textAlign="center">
        <Heading as="h2" size={{ base: "lg", md: "3xl" }} color="white">
          Transforme <Text fontWeight="bold" display="inline" color="teal.300">AGORA</Text> o rumo da sua empresa
        </Heading>
        <Text mt={-8}>
          Entre em contato <Text fontWeight="bold" display="inline" color="teal.300">IMEDIATAMENTE</Text> e vamos juntos, tornar a sua empresa <Text fontWeight="bold" display="inline" color="teal.300">VISÍVEL</Text>.
        </Text>
        <Button
          colorPalette="green"
          color="white"
          width={{ base:"95%", md:"20%"}}
          size="2xl"
          mx="auto"
          mb={10}
          px={8}
          variant="outline"
          _hover={{ bg: "green.700" }}
          loading={loading} onClick={() => {setLoading(!loading); handleLoading(!loading)}}
          >
          <a target="_blank" href="https://wa.me/5516996192224?text=Me%20ajuda%20a%20tornar%20minha%20empresa%20vis%C3%ADvel">
            <Icon mr={2}>
              <FaWhatsapp />
            </Icon>
            Impulsionar minha empresa
          </a>
        </Button>
      </Stack>
    </Box>
  );
}
