
const sumProducts = (products) => {
  let sum = 0
  products.forEach(element => {
    sum += element.price
  });
  return sum.toFixed(2)
}

export default sumProducts
