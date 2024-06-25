import { Container, Text, VStack, Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";

const Jewelry = () => {
  return (
    <Container maxW="100%" p={4}>
      <VStack spacing={10} align="stretch">
        <Box textAlign="center" py={10}>
          <Heading as="h1" size="2xl">Jewelry</Heading>
          <Text fontSize="xl">Beautiful Jewelry</Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <Box>
            <Image src="/images/jewelry1.jpg" alt="Jewelry 1" />
            <Text mt={2}>Beautiful Jewelry 1</Text>
          </Box>
          <Box>
            <Image src="/images/jewelry2.jpg" alt="Jewelry 2" />
            <Text mt={2}>Beautiful Jewelry 2</Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Jewelry;