interface Collection {
  name: string;
}

interface Contract {
  address: string;
}

export interface Collectable {
  token_id: string;
  id: number;
  image_url: string;
  collection: Collection;
  description: string;
  permalink: string;
  asset_contract: Contract;
}
