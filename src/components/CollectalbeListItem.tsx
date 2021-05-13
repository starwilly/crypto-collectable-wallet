import React from "react";
import { AspectRatio, Box, Image, Skeleton, Text } from "@chakra-ui/react";
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
        <AspectRatio width={"100%"} ratio={4 / 3}>
          <Image
            src={collectable.image_url}
            alt={collectable.collection.name}
            width={"100%"}
            height={"100%"}
            objectFit="cover"
            fallback={<Skeleton width={"100%"} height={"100%"}></Skeleton>}
          />
        </AspectRatio>
        <Text fontSize="xl" textAlign="center">
          {collectable.collection.name}
        </Text>
      </Link>
    </Box>
  );
}
