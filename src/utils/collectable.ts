import { useInfiniteQuery, useQuery } from "react-query";
import { Collectable, PageResponse } from "../models";
import client from "./client";

function fetchCollectable(contractAddress: string, tokenId: string) {
  return client
    .get(`/asset/${contractAddress}/${tokenId}`)
    .then((resp) => resp.data as Collectable);
}

function fetchCollectables(
  owner: string,
  page: number = 0,
  pageSize: number = 20
): Promise<PageResponse<Collectable>> {
  return client
    .get("/assets", {
      params: {
        owner,
        offset: page * pageSize,
        limit: pageSize,
      },
    })
    .then((resp) => {
      const collectables = resp.data.assets ?? [];
      return {
        data: collectables,
        hasNext: collectables.length === pageSize,
      };
    });
}

function useCollectable(contractAddress: string, tokenId: string) {
  return useQuery({
    queryKey: ["collectable", { contractAddress, tokenId }],
    queryFn: () => fetchCollectable(contractAddress, tokenId),
  });
}

function useCollectables(owner: string, pageSize: number = 20) {
  return useInfiniteQuery({
    queryKey: ["collectables", { owner }],
    queryFn: ({ pageParam: page }) => fetchCollectables(owner, page, pageSize),
    getNextPageParam: (lastPage: PageResponse<Collectable>, pages) =>
      lastPage.hasNext ? pages.length : undefined,
  });
}

export { useCollectables, useCollectable };
