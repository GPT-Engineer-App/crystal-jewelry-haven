import { Container, Text, VStack, Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";

const CleansingTools = () => {
  return (
    <Container maxW="100%" p={4}>
      <VStack spacing={10} align="stretch">
        <Box textAlign="center" py={10}>
          <Heading as="h1" size="2xl">Crystal Cleansing Tools</Heading>
          <Text fontSize="xl">Handmade Cleansing Tools</Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <Box>
            <Image src="/images/cleansing_tool.jpg" alt="Cleansing Tool" />
            <Text mt={2}>Handmade Cleansing Tools</Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default CleansingTools;