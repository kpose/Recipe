import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RecipeDetails from '../components/RecipeDetails'
import { connect } from 'react-redux';
import { fetchRecipe } from '../redux/actions/recipesAction';

const RecipeDetailsScreen = ({ match, dispatch, loading, recipe, hasErrors }) => {
  useEffect(() => {
    const { id } = match.params
    dispatch(fetchRecipe(id));
  }, [dispatch, match]);

  const renderRecipe = () => {
    if(loading.recipe) return <Text> Loading...</Text>
    if(hasErrors.recipe) return <Text>Unable to load</Text>
    return <RecipeDetails recipe = {recipe} />
  }

 
  return (
    <View style={styles.container}>
      {renderRecipe()}
    </View>
  );
};
 

const mapStateToProps = (state) => ({
  loading: state.recipe.loading,
  recipe: state.recipe.recipe,
  hasErrors: state.recipe.hasErrors,
});

export default connect(mapStateToProps)(RecipeDetailsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
