import { Container, Text, VStack, Box, Heading } from "@chakra-ui/react";

const Cosmetics = () => {
  return (
    <Container maxW="100%" p={4}>
      <VStack spacing={10} align="stretch">
        <Box textAlign="center" py={10}>
          <Heading as="h1" size="2xl">Upcoming All-Natural Cosmetic Line</Heading>
          <Text fontSize="xl">Launching soon! Stay tuned for our all-natural cosmetic products.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Cosmetics;