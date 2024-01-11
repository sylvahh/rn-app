import React from 'react';
import { View, ScrollView, StyleSheet, FlatList } from 'react-native';
import { BUSINESSES } from '../../../global.type';
import RestaurantList, { ResturantListSkema } from './resturant-list';

type ResturantCategoriesProps = {
  businesses: BUSINESSES[];
  searchedTitle?: string
};

const ResturantCategories = ({ businesses, searchedTitle }: ResturantCategoriesProps) => {
  const priceEffective = businesses.filter((business) => business.price && business.price.length === 1);
  const bitPricer = businesses.filter((business) => business.price && business.price.length === 2);
  const bigSpender = businesses.filter((business) => business.price && business.price.length > 2);
  const buisnessesWithoutPrice = [{
    title: `${searchedTitle} Businesses`, 
    businesses,
}]

  const categories = [
    {
      title: 'Price Effective',
      businesses: priceEffective,
    },
    {
      title: 'Bit Pricer',
      businesses: bitPricer,
    },
    {
      title: 'Big Spender!',
      businesses: bigSpender,
    },
  ];


  if (!priceEffective.length && !bitPricer.length && !bigSpender.length) {
  return (
    <FlatList
      style={styles.container}
      data={buisnessesWithoutPrice}
      renderItem={({ item }) => {
        return <RestaurantList  horizontal={false} {...item} />;
      }}
      keyExtractor={(item) => item.title}
    />
  );
}
  return (
    <FlatList
      style={styles.container}
      data={categories}
      renderItem={({ item }) => {
        return <RestaurantList horizontal {...item} />;
      }}
      keyExtractor={(item) => item.title}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
});

export default ResturantCategories;






export const ResturantCategoriesSkema = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ResturantListSkema />
      <ResturantListSkema />
      <ResturantListSkema />
    </ScrollView>
  );
};
