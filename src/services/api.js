export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const jason = await fetch(url);
  const data = await jason.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId === undefined) {
    categoryId = '';
  }
  if (query === undefined) {
    query = '';
  }
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const jason = await fetch(url);
  const data = await jason.json();
  return data;
}

export async function getDetailProducts(PRODUCT_ID) {
  const url = `https://api.mercadolibre.com/items/${PRODUCT_ID}`;
  const jason = await fetch(url);
  const data = await jason.json();
  return data;
}
