export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const json = await fetch(url);
  const data = await json.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/categories=${categoryId}&q=${query}`;
  const json = await fetch(url);
  const data = await json.json();
  return data;
}
