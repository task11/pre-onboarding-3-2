export type FilterItem = {
  id: number;
  title: string;
};

export type Filter = {
  broker: FilterItem;
  accountState: FilterItem;
  accountActiveState: FilterItem;
};
