import { Container, Text, VStack, Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";

const Bracelets = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={10} align="stretch">
        <Box textAlign="center" py={10}>
          <Heading as="h1" size="2xl">Crystal Bracelets</Heading>
          <Text fontSize="xl">Custom Crystal Bracelets</Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <Box>
            <Image src="/images/crystal_bracelet.jpg" alt="Crystal Bracelet" />
            <Text mt={2}>Custom Crystal Bracelets</Text>
          </Box>
          <Box>
            <Image src="/images/crystal_bracelet2.jpg" alt="Crystal Bracelet" />
            <Text mt={2}>Handmade Crystal Bracelets</Text>
          </Box>
        </SimpleGrid>
        <Box mt={10} pl={4}>
          <Heading as="h3" size="lg" mb={4}>Custom Bracelets</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <Box>
              <Image src="/images/custom_bracelet1.jpg" alt="Custom Bracelet 1" />
              <Text mt={2}>Custom Bracelet Design 1</Text>
            </Box>
            <Box>
              <Image src="/images/custom_bracelet2.jpg" alt="Custom Bracelet 2" />
              <Text mt={2}>Custom Bracelet Design 2</Text>
            </Box>
          </SimpleGrid>
        </Box>
        <Box mt={10} pl={4}>
          <Heading as="h3" size="lg" mb={4}>Featured Bracelets</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <Box>
              <Image src="/images/featured_bracelet1.jpg" alt="Featured Bracelet 1" />
              <Text mt={2}>Featured Bracelet Design 1</Text>
            </Box>
            <Box>
              <Image src="/images/featured_bracelet2.jpg" alt="Featured Bracelet 2" />
              <Text mt={2}>Featured Bracelet Design 2</Text>
            </Box>
            <Box>
              <Image src="/images/featured_bracelet3.jpg" alt="Featured Bracelet 3" />
              <Text mt={2}>Featured Bracelet Design 3</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Bracelets;