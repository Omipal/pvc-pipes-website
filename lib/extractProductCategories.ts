import { Product, ProductCategory } from "@/types/product";

export function extractProductCategories(
  products: Product[],
): ProductCategory[] {
  const map = new Map<number, ProductCategory>();

  products.forEach((product) => {
    product.categories?.forEach((cat) => {
      if (!map.has(cat.id)) {
        map.set(cat.id, cat);
      }
    });
  });

  return Array.from(map.values());
}
