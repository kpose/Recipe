const renderRecipes = () => {
    if (loading) return <Text>Loading Recipes....</Text>
    if (hasErrors) return <Text>Unable To Display Recipes</Text>
    /* return console.log(recipes.recipes) */
    /* return recipes.recipes.map(recipe => <Recipe  recipe={recipe} />) */
   return Object.keys(recipes).map (keys => {
      recipes[keys].map((recipe) => 
         //<Recipe key = {recipe.id} recipe = {recipe} />
         console.log(recipe.id)
      )})

      /* return <Text>hello</Text> */
  
    

    
    /* return Object.keys(recipes).map (key =>{
      recipes[key].map(recipe =>{
        console.log(recipe.title)
        {
          <Recipe recipe ={recipe} />
        }
        
      })
    }) */
  }