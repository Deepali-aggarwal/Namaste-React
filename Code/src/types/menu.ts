export interface MenuItemInfo {
  id: string;
  name: string;
  price?: number;
  description: string;
  imageId?: string;
  defaultPrice?: number;
}

export interface MenuItemCard {
  card: {
    info: MenuItemInfo;
  };
}

export interface CategoryCardData {
  title?: string;
  itemCards?: MenuItemCard[];
  ["@type"]?: string;
}