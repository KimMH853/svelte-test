export const load = async ({ fetch }) => {
  //   const productRes = await fetch("https://dummyjson.com/products?limit=10");
  //   const productData = await productRes.json();
  //   const products = productData.products;
  //   return {
  //     products: products,
  //   };
  const testRes = await fetch("http://localhost:3000/board/list");
  const testData = await testRes.json();
  return { testData };
};
