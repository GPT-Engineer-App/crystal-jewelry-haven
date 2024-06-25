import { Container, Text, VStack, Box, Heading, Image, SimpleGrid, Flex, Link, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justify="space-between" align="center">
        <Heading as="h1" size="lg">Crying Nature</Heading>
        <Flex>
          <Link href="#bracelets" p={2}>Bracelets</Link>
          <Link href="#jewelry" p={2}>Jewelry</Link>
          <Link href="#tools" p={2}>Cleansing Tools</Link>
          <Link href="#candles" p={2}>Candles</Link>
          <Link href="#apparel" p={2}>Apparel</Link>
          <Link href="#subscription" p={2}>Subscription</Link>
          <Link href="#cosmetics" p={2}>Cosmetics</Link>
        </Flex>
      </Flex>

      <VStack spacing={10} align="stretch">
        <Box textAlign="center" py={10}>
          <Heading as="h1" size="2xl">Crying Nature</Heading>
          <Text fontSize="xl">Crystal Bracelets, Jewelry, Cleansing Tools, Candles, Apparel, and Cosmetics</Text>
        </Box>

        <Box id="bracelets">
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
        </Box>

        <Box id="jewelry">
          <Heading as="h2" size="xl" mb={4}>Jewelry</Heading>
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

        <Box id="tools">
          <Heading as="h2" size="xl" mb={4}>Crystal Cleansing Tools</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <Box>
              <Image src="/images/cleansing_tool.jpg" alt="Cleansing Tool" />
              <Text mt={2}>Handmade Cleansing Tools</Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Box id="candles">
          <Heading as="h2" size="xl" mb={4}>Candles</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <Box>
              <Image src="/images/soy_candle.jpg" alt="Soy Candle" />
              <Text mt={2}>Hand Poured Soy Wax Candles</Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Box id="apparel">
          <Heading as="h2" size="xl" mb={4}>Apparel</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <Box>
              <Image src="/images/apparel.jpg" alt="Apparel" />
              <Text mt={2}>Apparel for Everyone</Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Box id="subscription">
          <Heading as="h2" size="xl" mb={4}>Subscription Service</Heading>
          <Text fontSize="lg">$10/month for bracelet tightening, bead cleaning, and more.</Text>
        </Box>

        <Box id="cosmetics">
          <Heading as="h2" size="xl" mb={4}>Upcoming All-Natural Cosmetic Line</Heading>
          <Text fontSize="lg">Launching soon! Stay tuned for our all-natural cosmetic products.</Text>
        </Box>
      </VStack>

      <Box as="footer" bg="gray.800" color="white" p={4} mt={10}>
        <Flex justify="space-between" align="center">
          <Text>&copy; 2023 Crying Nature. All rights reserved.</Text>
          <Flex>
            <Link href="https://facebook.com" isExternal>
              <IconButton icon={<FaFacebook />} aria-label="Facebook" variant="ghost" color="white" />
            </Link>
            <Link href="https://instagram.com" isExternal>
              <IconButton icon={<FaInstagram />} aria-label="Instagram" variant="ghost" color="white" />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <IconButton icon={<FaTwitter />} aria-label="Twitter" variant="ghost" color="white" />
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;