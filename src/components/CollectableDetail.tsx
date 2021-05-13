import {
  AspectRatio,
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/layout";
import React from "react";
import { Collectable } from "../models/collectable";
import { Button, IconButton, Image, Skeleton } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router";

type Props = {
  collectable: Collectable;
};

export default function CollectableDetail({ collectable }: Props) {
  const history = useHistory();
  const onpenPermalLink = () =>
    window.open(collectable.permalink, "_blank", "noreferrer");
  const goToList = () => history.push("/list");
  const headerHeight = "60px";
  const footerHeight = "60px";

  const Header = () => (
    <HStack
      h={headerHeight}
      borderColor="gray.100"
      backgroundColor="white"
      borderWidth={1}
      spacing={"2"}
      position="fixed"
      zIndex={1}
      top={0}
      w={"full"}
    >
      <IconButton
        icon={<ChevronLeftIcon />}
        isRound={true}
        variant="unstyled"
        onClick={goToList}
        aria-label="Go back"
      ></IconButton>
      <Heading as="h1" size="md">
        {collectable.collection.name}
      </Heading>
    </HStack>
  );

  const Footer = () => (
    <Flex
      position="fixed"
      bottom={0}
      height={footerHeight}
      grow={1}
      w={"100%"}
      padding={2}
      background="white"
    >
      <Button isFullWidth={true} onClick={onpenPermalLink}>
        permallink
      </Button>
    </Flex>
  );

  return (
    <Flex direction="column" minH={"100%"} paddingBottom={footerHeight}>
      <Header />
      <Container
        paddingTop={headerHeight}
        paddingBottom={footerHeight}
        flexGrow={1}
      >
        <Image
          w={"100%"}
          src={collectable.image_url}
          alt={collectable.collection.name}
          fallback={
            <AspectRatio width={"100%"} ratio={4 / 3}>
              <Skeleton width={"100%"} height={"100%"}></Skeleton>
            </AspectRatio>
          }
        />
        <Text fontSize={"xl"} mb={4}>
          {collectable.collection.name}
        </Text>
        <Box>{collectable.description}</Box>
      </Container>
      <Footer />
    </Flex>
  );
}
