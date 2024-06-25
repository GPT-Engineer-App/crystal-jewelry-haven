import { Container, Text, VStack, Box, Heading, Flex, Link, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="100%" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justify="space-between" align="center">
        <Heading as="h1" size="lg">Crying Nature</Heading>
        <Flex>
          <Link href="/bracelets" p={2}>Bracelets</Link>
          <Link href="/jewelry" p={2}>Jewelry</Link>
          <Link href="/cleansing-tools" p={2}>Cleansing Tools</Link>
          <Link href="/candles" p={2}>Candles</Link>
          <Link href="/apparel" p={2}>Apparel</Link>
          <Link href="/subscription" p={2}>Subscription</Link>
          <Link href="/cosmetics" p={2}>Cosmetics</Link>
        </Flex>
      </Flex>

      <VStack spacing={10} align="stretch">
        <Box textAlign="center" py={10}>
          <Heading as="h1" size="2xl">Crying Nature</Heading>
          <Text fontSize="xl">Crystal Bracelets, Jewelry, Cleansing Tools, Candles, Apparel, and Cosmetics</Text>
        </Box>
      </VStack>

      <Box as="footer" bg="gray.800" color="white" p={4} mt={10}>
        <Flex justify="space-between" align="center">
          <Text>&amp;copy; 2023 Crying Nature. All rights reserved.</Text>
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