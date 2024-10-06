class Meal {
    constructor(day, mealType, allergens, ingredients) {
      this.day = day; // Day of the week
      this.mealType = mealType; // Meal type: Breakfast, Lunch, Dinner
      this.ingredients = ingredients || []; // Array of ingredients with name and price
    }

    
}