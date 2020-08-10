import React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



function Recipe({ recipe }) {
  const navigation = useNavigation();
  return (
    <Container>
      <TouchableOpacity 
      onPress={() => navigation.navigate('RecipeDetailsScreen', {recipe})}
      >
        <Cover>
        <Image source={{ uri: recipe.image }} />
      </Cover>
      </TouchableOpacity>

      <Content>
        <Title>{recipe.title}</Title>
        <PriceCaption>
          <Feather name="clock" size={18} color="green" />
          {recipe.readyInMinutes} mins
        </PriceCaption>
      </Content>
    </Container>
  );
};

export default Recipe;

const Container = styled.View`
  background: #fff;
  height: 200px;
  width: 150px;
  border-radius: 14px;
  margin: 18px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  width: 100%;
  height: 120px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Content = styled.View`
  padding-top: 10px;
  flex-direction: column;
  align-items: center;
  height: 60px;
`;

const Title = styled.Text`
  color: #3c4560;
  font-size: 18px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
`;

const PriceCaption = styled.Text`
  color: #b8b3c3;
  font-size: 15px;
  font-weight: 600;
  margin-top: 4px;
`;
