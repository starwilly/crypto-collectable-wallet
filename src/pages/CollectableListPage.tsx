import React from "react";
import { useCollectables } from "../utils/collectable";
import CollectableList from "../components/CollectableList";

const ethOwner = "0x960DE9907A2e2f5363646d48D7FB675Cd2892e91";

export default function CollectableListPage() {
  const { data, fetchNextPage, hasNextPage } = useCollectables(ethOwner);
  return (
    <>
      {data ? <CollectableList pages={data.pages} /> : null}
      {hasNextPage ? (
        <button onClick={() => fetchNextPage()}>next</button>
      ) : null}
    </>
  );
}
