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
  const query = '*[_type == "category" && title != "Best Seller"].title';
  const url = `${sanityBaseUrl}${encodeURIComponent(query)}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.result.sort((a, b) => a.localeCompare(b)).map((title) => ({
    text: title,
    href: '/products/' + title.toLowerCase().replaceAll(' ', '-'),
  }));
};

// fetch all categories title and images

export const fetchCategoriesTitleAndImages = async () => {
  const query = '*[_type == "category" && title != "Best Seller"]{title, image}';
  const url = `${sanityBaseUrl}${encodeURIComponent(query)}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.result.map((category) => ({
    category: category.title,
    image: category.image?.url,
  }));
};

// fetch all products in a category
export const fetchProductsInCategory = async (category) => {
  const query = `*[_type == "category" && lower(title) == "${category}"].products[]->{title, image}`;
  const url = `${sanityBaseUrl}${encodeURIComponent(query)}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.result.map((product) => ({
    title: product?.title,
    image: product?.image.url,
  }));
};

// fetching all categories and their products with title, image and category
export const fetchAllCategoriesAndProducts = async () => {
  // Modified query to limit products to 10 per category using slice operator
  const query = '*[_type == "category"]{title, products[0...7]->{title, image}}';
  const url = `${sanityBaseUrl}${encodeURIComponent(query)}`;
  const response = await fetch(url);
  const data = await response.json();
  return (
    data?.result?.flatMap(
      (category) =>
        category?.products?.map((product) => ({
          name: product?.title ?? 'Untitled Product',
          image: product?.image?.url ?? '/placeholder.jpg',
          category: category?.title ?? 'Uncategorized',
        })) ?? []
    ) ?? []
  );
};
