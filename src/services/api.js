export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const jason = await fetch(url);
  const data = await jason.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/categories=${categoryId}&q=${query}`;
  const jason = await fetch(url);
  const data = await jason.json();
  return data;
}
