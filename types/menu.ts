export type MenuLink = {
  label: string;
  href: string;
};

export type CategoryMenu = {
  title: string;
  browseByLinks: MenuLink[];
  applicationsLinks: MenuLink[];
  productFamiliesLinks: MenuLink[];
};
