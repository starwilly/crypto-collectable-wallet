import React from "react";
import { Box, Image, Skeleton, Text } from "@chakra-ui/react";
import { Collectable } from "../models/collectable";
import { Link } from "react-router-dom";

type Props = {
  collectable: Collectable;
};

export default function CollectableListItem({ collectable }: Props) {
  const url = `/details/${collectable.asset_contract.address}/${collectable.token_id}`;
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      padding={4}
      borderWidth={1}
      borderColor={"gray.200"}
      height={"100%"}
    >
      <Link to={url}>
        <Box width={"100%"} pb={"75%"} overflow="hidden" position="relative">
          <Box position="absolute" top={0} bottom={0} left={0} right={0} mb={2}>
            <Image
              src={collectable.image_url}
              alt={collectable.collection.name}
              width={"100%"}
              height={"100%"}
              objectFit="cover"
              fallback={<Skeleton width={"100%"} height={"100%"}></Skeleton>}
            />
          </Box>
        </Box>
        <Text fontSize="xl" textAlign="center">
          {collectable.collection.name}
        </Text>
      </Link>
    </Box>
  );
}
