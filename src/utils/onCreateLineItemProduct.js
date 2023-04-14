function onCreateLineItemsProduct(product, quantity) {
  return {
    price_data: {
      currency: "usd",
      product_data: {
        name: product.name,
        images: [product.img.url],
      },
      unit_amount: product.price * 100,
    },
    quantity: quantity,
  };
}

module.exports = { onCreateLineItemsProduct };
