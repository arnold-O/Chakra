import {
  Box,
  Image,
  Button,
  Container,
  Heading,
  Grid,
  Badge,
  HStack,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Text,
  Link,
  Stack,
} from "@chakra-ui/react";

function Banner() {
  return (
    <>
      <Box
        d="flex"
        align-items="center"
        justifyContent="space-between"
        flexWrap="wrap"
        ml={6}
        mr={6}
      >
        <Image src="/logom.png" w="100px" h="auto" />
        <Box>
          <Button colorScheme="grey.600" fontSize="sm" variant="link">
            login
          </Button>
          <Button colorScheme="grey.600" fontSize="sm" variant="link">
            Sign up
          </Button>
        </Box>
      </Box>
      {/* let go to the content  */}
      <Box>
        <Container maxW="container.xl">
          <Box d="flex" flexDirection="row" align-items="center">
            <Box mr={6}>
              <Heading as="h1" size="2xl">
                <Box fontWeight="black">
                  Dive in ! there are so many things to do in a meet up
                </Box>
              </Heading>
              <Box mt="6" fontweight="medium">
                ssentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and
                more recently with
              </Box>
            </Box>
            <Box w="100%">
              <Image w="100%" src="/illustra.svg"></Image>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container maxW="container.xl" mt="10">
        <Grid templateColumns="repeat(3, 1fr)">
          <Box boxSize="sm">
            <Image
              borderRadius="lg"
              src="https://secure.meetupstatic.com/next/images/indexPage/category3.webp?w=1200"
            />
          </Box>
          <Box boxSize="sm">
            <Image
              w="100%"
              borderRadius="lg"
              src="https://secure.meetupstatic.com/next/images/indexPage/category1.webp?w=1200"
            />
          </Box>
          <Box boxSize="sm">
            <Image
              borderRadius="lg"
              objectFit="cover"
              src="https://secure.meetupstatic.com/next/images/indexPage/category2.webp?w=1200"
            />
          </Box>
        </Grid>
      </Container>
      <Container maxW="container.xl" mt="">
        <Box
          d="flex"
          direction="row"
          flexWrap="wrap"
          justifyContent="space-between"
        >
          <Badge
            borderRadius="3xl"
            px={4}
            py={4}
            mb="4"
            mr="4"
            bg="blue.500"
            color="#fff"
          >
            Boost Your Carrer
          </Badge>
          <Badge
            borderRadius="3xl"
            px={4}
            py={4}
            mb="4"
            mr="4"
            bg="blue.500"
            color="#fff"
          >
            Find Your Zen
          </Badge>
          <Badge
            borderRadius="3xl"
            px={4}
            py={4}
            mb="4"
            mr="4"
            bg="blue.500"
            color="#fff"
          >
            Get Moving
          </Badge>
          <Badge
            borderRadius="3xl"
            px={4}
            py={4}
            mb="4"
            mr="4"
            bg="blue.500"
            color="#fff"
          >
            Share language + Culture
          </Badge>
          <Badge
            borderRadius="3xl"
            px={4}
            py={4}
            mb="4"
            mr="4"
            bg="blue.500"
            color="#fff"
          >
            Read with Friends
          </Badge>
          <Badge
            borderRadius="3xl"
            px={4}
            py={4}
            mb="4"
            mr="4"
            bg="blue.500"
            color="#fff"
          >
            Write Together
          </Badge>
          <Badge
            borderRadius="3xl"
            px={4}
            py={4}
            mb="4"
            mr="4"
            bg="blue.500"
            color="#fff"
          >
            Hone Your Craft
          </Badge>
        </Box>
      </Container>
      <Container maxW="container.xl" mt="12">
        <SimpleGrid columns={2} textAlign="left">
          <Box>
            <Heading>What do you want to do?</Heading>
            <FormControl
              isRequired
              d="flex"
              justifyContent="space-between"
              mt="15px"
            >
              <Input
                h="42px"
                size="md"
                variant="filled"
                w="40%"
                mr="5px"
                id="search"
                placeholder="Search"
              />
              <Input
                h="42px"
                size="md"
                variant="filled"
                p
                w="40%"
                mr="20%"
                id="location"
                placeholder="location"
              />
            </FormControl>
            <Button h="48px" width="80%" mt="12px" bg="#f77070">
              Search
            </Button>
          </Box>
          <Box>
            <Heading mb="5">See what is happening</Heading>
            <HStack flexWrap={"wrap"}>
              <Badge
                borderRadius="3xl"
                px={4}
                py={4}
                mb="4"
                mr="4"
                bg="blue.500"
                color="#fff"
              >
                Starting Soon
              </Badge>
              <Badge
                borderRadius="3xl"
                px={4}
                py={4}
                mb="4"
                mr="4"
                bg="blue.500"
                color="#fff"
              >
                Today
              </Badge>
              <Badge
                borderRadius="3xl"
                px={4}
                py={4}
                mb="4"
                mr="4"
                bg="blue.500"
                color="#fff"
              >
                Tomorrow
              </Badge>
              <Badge
                borderRadius="3xl"
                px={4}
                py={4}
                mb="4"
                mr="4"
                bg="blue.500"
                color="#fff"
              >
                This Week
              </Badge>
              <Badge
                borderRadius="3xl"
                px={4}
                py={4}
                mb="4"
                mr="4"
                bg="blue.500"
                color="#fff"
              >
                Online
              </Badge>
              <Badge
                borderRadius="3xl"
                px={4}
                py={4}
                mb="4"
                mr="4"
                bg="blue.500"
                color="#fff"
              >
                In Person
              </Badge>
              <Badge
                borderRadius="3xl"
                px={4}
                py={4}
                mb="4"
                mr="4"
                bg="blue.500"
                color="#fff"
              >
                Trending Near You
              </Badge>
            </HStack>
          </Box>
        </SimpleGrid>
      </Container>
      <Container container="xl">
        <Heading fontSize="30px" m="60px auto 0">
          How Meet Up Works
        </Heading>
        <Box>
          <Text fonstSize="16px">
            meet new people who share your interests through online and
            in-person events. It’s free to create an account.
          </Text>
        </Box>
      </Container>
      <Container maxW="container.xl" m="15px 0px 45px 0px">
        <SimpleGrid mt="18px" columns={{ base: 1, md: 3 }} spacing="20px">
          <Stack align={"center"}>
            <Image
              w="250px"
              h="150px"
              src="https://secure.meetupstatic.com/next/images/shared/handsUp.svg?w=256"
            />
            <Text fontSize="24px" color="blue">
              <Link>Join A Group</Link>
            </Text>
            <Text fontSize="15px">
              Events are happening on just about any topic you can photography
              to yoga and hiking.
            </Text>
          </Stack>
          <Stack align={"center"}>
            <Image
              w="250px"
              h="150px"
              src="https://secure.meetupstatic.com/next/images/shared/ticket.svg?w=256"
            />
            <Text fontSize="24px" color="blue">
              <Link>Create a Group</Link>
            </Text>
            <Text fontSize="15px">
              Events are happening on just about any topic you can thin
              photography to yoga and hiking.
            </Text>
          </Stack>
          <Stack align={"center"}>
            <Image
              w="250px"
              h="150px"
              src="https://secure.meetupstatic.com/next/images/shared/joinGroup.svg?w=256"
            />
            <Text fontSize="24px" color="blue">
              <Link>Find an Event</Link>
            </Text>
            <Text fontSize="15px">
              Events are happening on just about any topic you can from online
              gaming hiking.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
      <Container container="xl">
        <Button color="#fff" bg="#0098AE">
          Join A Meeting
        </Button>
      </Container>

      <Container maxW="container.xl" mb="45px" mt="100px">
        <SimpleGrid columns={2} spacing="45%">
          <Box>
            <Heading fontSize="30px">Upcoming Online Event</Heading>
          </Box>

          <Box>
            <Text fontSize="16px">Explore more events</Text>
          </Box>
        </SimpleGrid>
      </Container>

      <Container maxW="container.xl" mb="45px" mt="100px">
        <SimpleGrid>
          
        </SimpleGrid>
      </Container>

    </>
  );
}

export default Banner;
