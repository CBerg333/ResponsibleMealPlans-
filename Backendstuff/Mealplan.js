class MealPlan {
    constructor() {
      this.meals = new Meal[]; // Array to store all meals in the meal plan
    }
  
    // Method to add a meal to the meal plan
    addMeal(meal) {
      this.meals.push(meal);
    }
}  