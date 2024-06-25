import { Container, Text, VStack, Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";

const Apparel = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={10} align="stretch">
        <Box textAlign="center" py={10}>
          <Heading as="h1" size="2xl">Apparel</Heading>
          <Text fontSize="xl">Apparel for Everyone</Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <Box>
            <Image src="/images/apparel.jpg" alt="Apparel" />
            <Text mt={2}>Apparel for Everyone</Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Apparel;