function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length > 2) {
  return deliveryOrders;
  } else {
  return deliveryOrders.push(order);
  }
}

function refundOrder(orderNum, deliveryOrders) {
  orderNum = deliveryOrders[i];
  deliveryOrders.splice(orderNum, 1);
  return deliveryOrders;
}

function listItems(deliveryOrders) {
  
  return deliveryOrders.indexOf();
}



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
}
