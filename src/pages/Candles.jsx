import { Container, Text, VStack, Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";

const Candles = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={10} align="stretch">
        <Box textAlign="center" py={10}>
          <Heading as="h1" size="2xl">Candles</Heading>
          <Text fontSize="xl">Hand Poured Soy Wax Candles</Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <Box>
            <Image src="/images/soy_candle.jpg" alt="Soy Candle" />
            <Text mt={2}>Hand Poured Soy Wax Candles</Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Candles;