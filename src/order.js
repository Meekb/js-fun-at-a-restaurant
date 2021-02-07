function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length > 2) {
  return deliveryOrders;
  } else {
  return deliveryOrders.push(order);
  }
}

function refundOrder(num, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === num) {
      return deliveryOrders.splice([i], 1);
    }
  }
}


function listItems(deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    return deliveryOrders[i].item + ", " + deliveryOrders[i+1].item + ", " + deliveryOrders[i+2].item;
  }
}


function searchOrder(deliveryOrders, searchWord) {
  for( var i = 0; i < deliveryOrders.length; i++) {
    if(deliveryOrders[i].item === searchWord) {
       return true;
    } else continue ;
      } return false;
    }



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
