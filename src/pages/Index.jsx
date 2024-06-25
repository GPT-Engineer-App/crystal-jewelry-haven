import { Container, Text, VStack, Box, Heading, Image, Flex, SimpleGrid, Button } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={10} align="stretch">
        <Box textAlign="center" py={10}>
          <Heading as="h1" size="2xl">Crying Nature</Heading>
          <Text fontSize="xl">Handmade Crystal Jewelry, Cleansing Tools, Soy Wax Candles, Apparel, and More</Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Crystal Bracelets</Heading>
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
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Other Crystal Jewelry</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <Box>
              <Image src="/images/crystal_necklace.jpg" alt="Crystal Necklace" />
              <Text mt={2}>Crystal Necklaces</Text>
            </Box>
            <Box>
              <Image src="/images/crystal_earrings.jpg" alt="Crystal Earrings" />
              <Text mt={2}>Crystal Earrings</Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Crystal Cleansing Tools</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <Box>
              <Image src="/images/cleansing_tool.jpg" alt="Cleansing Tool" />
              <Text mt={2}>Handmade Cleansing Tools</Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Soy Wax Candles</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <Box>
              <Image src="/images/soy_candle.jpg" alt="Soy Candle" />
              <Text mt={2}>Hand Poured Soy Wax Candles</Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Apparel</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <Box>
              <Image src="/images/apparel.jpg" alt="Apparel" />
              <Text mt={2}>Apparel for Everyone</Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Subscription Service</Heading>
          <Text fontSize="lg">$10/month for bracelet tightening, bead cleaning, and more.</Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Upcoming All-Natural Cosmetic Line</Heading>
          <Text fontSize="lg">Launching soon! Stay tuned for our all-natural cosmetic products.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;