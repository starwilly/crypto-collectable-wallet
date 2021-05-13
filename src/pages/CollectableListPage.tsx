import React from "react";
import { useCollectables } from "../utils/collectable";
import CollectableList from "../components/CollectableList";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "@chakra-ui/spinner";
import { Box, Heading } from "@chakra-ui/layout";

const ethOwner = "0x960DE9907A2e2f5363646d48D7FB675Cd2892e91";

export default function CollectableListPage() {
  const { data, fetchNextPage, hasNextPage, isLoading } =
    useCollectables(ethOwner);

  const dataLength = (data?.pages ?? []).reduce(
    (acc, page) => acc + page.data.length,
    0
  );

  return (
    <div>
      <Heading textAlign="center" mb={4}>
        Crypto Collectable Wallet
      </Heading>
      {isLoading || !data ? (
        <Spinner />
      ) : (
        <InfiniteScroll
          dataLength={dataLength}
          hasMore={hasNextPage || false}
          next={fetchNextPage}
          loader={<Spinner />}
          endMessage={
            <Box as="p" padding={4} fontSize="xl" textAlign="center">
              Yay! You have seen it all
            </Box>
          }
        >
          <CollectableList pages={data.pages} />
        </InfiniteScroll>
      )}
    </div>
  );
}
