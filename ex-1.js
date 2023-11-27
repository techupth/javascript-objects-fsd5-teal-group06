// Exercise #1: Food Order

// Start coding here
const foodOrder = {
  orderNumber: "A0234",
  address: "Bangkok",
  paymentType: "Cash",
  totalPrice: 4500,
  restaurantName: "MK",
};
foodOrder.paymentType = "credit card";
foodOrder.totalPrice = 5000;
console.log(foodOrder.paymentType);
console.log(foodOrder.totalPrice);
console.log(foodOrder);
