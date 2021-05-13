import { useInfiniteQuery, useQuery, useQueryClient } from "react-query";
import { fetchCollectable, fetchCollectables } from "../api/collectable";
import { Collectable, PageResponse } from "../models";

function useCollectable(contractAddress: string, tokenId: string) {
  return useQuery({
    queryKey: ["collectable", { contractAddress, tokenId }],
    queryFn: () => fetchCollectable(contractAddress, tokenId),
  });
}

function useCollectables(owner: string, pageSize: number = 20) {
  const queryClient = useQueryClient();
  const updateCache = (c: Collectable) =>
    queryClient.setQueryData(
      [
        "collectable",
        {
          contractAddress: c.asset_contract.address,
          tokenId: c.token_id,
        },
      ],
      c
    );

  return useInfiniteQuery({
    queryKey: ["collectables", { owner }],
    queryFn: ({ pageParam: page }) => fetchCollectables(owner, page, pageSize),
    getNextPageParam: (lastPage: PageResponse<Collectable>, pages) =>
      lastPage.hasNext ? pages.length : undefined,
    onSuccess: ({ pages }) => {
      // update cache for collectable, so it will be fast when user
      // go from list page to detail page
      const collectables = pages[pages.length - 1].data;
      collectables.forEach((c) => updateCache(c));
    },
  });
}

export { useCollectables, useCollectable };
