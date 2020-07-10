import React, { useEffect } from 'react'
//import {Block, Text } from "expo-ui-kit"
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux'
import {fetchRecipes}  from '../redux/actions/recipeActions'
import {Recipe} from '../components/Recipe'

const Recipes = ({ loading, hasErrors, recipes, dispatch}) => {
    useEffect(() => {
      dispatch(fetchRecipes())
    }, [dispatch])

    const renderRecipes = () => {
      let resolvedRecipe = recipes.recipes;
      if (loading) {
        return <Text>Loading Recipes...</Text>
      } else if (hasErrors) {
        return <Text>Unable to display recipes at this time.</Text>
      } else{
        return resolvedRecipe.map(recipe => {
          return <Recipe key= {recipe.id} recipe ={recipe} />
          
        })
      }
    }

  return (
    <View style={styles.container}>
      <Text >Recipes Screen</Text>
      {renderRecipes()}
    </View>
  )
}

const mapStateToProps = (state) => ({
  loading: state.recipes.loading,
  recipes: state.recipes.recipes,
  hasErrors: state.recipes.hasErrors,
});

export default connect (mapStateToProps) (Recipes)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
