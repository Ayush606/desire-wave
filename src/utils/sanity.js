// sanity utils

const sanityBaseUrl = 'https://1qnc73ya.api.sanity.io/v2022-03-07/data/query/production?query=';

//title formatter function
export const titleFormatter = async (title) => {
  return await title
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// fetch all categories title and url
export const fetchCategoriesTitleAndUrl = async () => {
  const query = '*[_type == "category"].title';
  const url = `${sanityBaseUrl}${encodeURIComponent(query)}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.result.map((title) => ({
    text: title,
    href: title.toLowerCase(),
  }));
};

// fetch all categories title and images

export const fetchCategoriesTitleAndImages = async () => {
  const query = '*[_type == "category"]{title, image}';
  const url = `${sanityBaseUrl}${encodeURIComponent(query)}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.result.map((category) => ({
    category: category.title,
    image: category.image.url,
  }));
};

// fetch all products in a category
export const fetchProductsInCategory = async (category) => {
  const query = `*[_type == "category" && lower(title) == "${category}"].products[]->{title, image}`;
  const url = `${sanityBaseUrl}${encodeURIComponent(query)}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.result.map((product) => ({
    title: product.title,
    image: product.image.url,
  }));
};

// fetching all categories and their products with title, image and category
export const fetchAllCategoriesAndProducts = async () => {
  const query = '*[_type == "category"]{title, products[]->{title, image}}';
  const url = `${sanityBaseUrl}${encodeURIComponent(query)}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.result.flatMap((category) =>
    category.products.map((product) => ({
      name: product.title,
      image: product.image.url,
      category: category.title,
    }))
  );
};
