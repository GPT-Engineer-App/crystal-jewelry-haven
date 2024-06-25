import { Container, Text, VStack, Box, Heading } from "@chakra-ui/react";

const Subscription = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={10} align="stretch">
        <Box textAlign="center" py={10}>
          <Heading as="h1" size="2xl">Subscription Service</Heading>
          <Text fontSize="xl">$10/month for bracelet tightening, bead cleaning, and more.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscription;