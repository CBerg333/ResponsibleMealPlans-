// api key and button variables
apiKey = "bd56b1a9a045497682b74179d1185ede";
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');
const logInButton = document.getElementById('logInBtn');
const signUpButton = document.getElementById('signUpBtn');

// Log in, Sign up and search buttons' event listeners
logInButton.addEventListener('click', function() {
    document.getElementById('message').innerHTML = 'The text has changed! You clicked the button!';
  });

signUpButton.addEventListener('click', function() {
    document.getElementById('message').innerHTML = 'The text has changed 2! You clicked the button!';
  });

// call fetch recipes to make API calls that get a list of recipes from JSON data
searchBtn.addEventListener('click', () => {
    const query = searchInput.value;
    fetchRecipes(query);
  });


// make API call to spoonacular to get the recipes
function fetchRecipes(query) {
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`;
    
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        displayResults(data.results);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  function displayResults(recipes) {
    resultsDiv.innerHTML = ''; // Clear previous results
  
    if (recipes.length === 0) { // Check if no recipes were found
      resultsDiv.innerHTML = '<p>No recipes found.</p>';
      return; // Exit the function early
    }
  
    recipes.forEach(recipe => { // Iterates through each recipe in the array
      const recipeDiv = document.createElement('div'); // Create a new div for each recipe
  
      // Fetch the price breakdown for each recipe by its ID
      fetchPriceBreakdown(recipe.id).then(priceData => {
        // Get total cost or use 'N/A' if data is unavailable
        const totalCost = priceData.totalCost ? (priceData.totalCost / 100).toFixed(2) : 'N/A';
        
        // Set the inner HTML to display the recipe details, including price breakdown
        recipeDiv.innerHTML = `
          <h2>${recipe.title}</h2>
          <img src="${recipe.image}" alt="${recipe.title}" width="150">
          <p>Recipe ID: ${recipe.id}</p>
          <p>Price Breakdown - Total Cost: $${totalCost}</p> <!-- Display total cost from price breakdown -->
        `;
  
        resultsDiv.appendChild(recipeDiv); // Append the recipe div to the resultsDiv


        
      }).catch(error => {
        console.error('Error fetching price breakdown:', error);
      });
    });
  }

  function fetchPriceBreakdown(recipeId) {
    const url = `https://api.spoonacular.com/recipes/${recipeId}/priceBreakdownWidget.json?apiKey=${apiKey}`;
    
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch price breakdown');
        }
        return response.json();
      })
      .then(data => {
        return data; 
      })
      .catch(error => {
        console.error('Error fetching price breakdown:', error);
        return {}; 
      });
  }

  function fetchNutritionInfo(recipeId) {
    // construct API call url
    const url = `https://api.spoonacular.com/recipes/${recipeId}/information&apiKey=${apiKey}`;

    // fetch using url and process returned data
    return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch price breakdown');
      }
      return response.json();
    })
    .then(data => {
      return data; 
    })
    .catch(error => {
        console.error(`error finding nutrition information:`, error);
        return {};
    })
  }
  