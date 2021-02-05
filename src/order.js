function takeOrder(order, deliveryOrders, takeOutOrders) {
  if (deliveryOrders !== undefined && deliveryOrders.length < 3) {
    deliveryOrders.push(order);
    return deliveryOrders;
  } else if (deliveryOrders !== undefined && deliveryOrders.length >= 3) {
    return deliveryOrders;
  } else if (deliveryOrders === undefined && takeOutOrders.length < 3) {
    takeOutOrders.push(order);
    return takeOutOrders;
  } else {
    return takeOutOrders;
  }
}

function refundOrder() {
  
}

module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}
