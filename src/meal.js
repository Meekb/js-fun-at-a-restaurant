function nameMenuItem(name) {
  return `Delicious ${name}`;
}


function createMenuItem(menuItemName, price, type) {
  menuItem = {
    name: menuItemName,
    price: price,
    type: type,
  };
  return menuItem;
}


function addIngredients(newIngredient, ingredients) {
      if (ingredients.includes(newIngredient)) {
        return ingredients
      } else {
        return ingredients.push(newIngredient);
      }
    }


function formatPrice(initialPrice) {
  return `$${initialPrice}`;
}


function decreasePrice(initialPrice) {
  return initialPrice - (initialPrice * 0.10);
}


function createRecipe(menuItem, ingredients, menuItemType) {
   recipe = {
     title: menuItem,
     ingredients: ingredients,
     type: menuItemType,
   };
   return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
