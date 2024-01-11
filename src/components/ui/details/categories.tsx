import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { CATEGORIES } from '../../../global.type';

const Categories = ({ categories }: { categories: CATEGORIES[] }) => {
  return (
    <View>
      <Text style={styles.subHeaders}>Categories</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categories}
        renderItem={({ item }) => (
          <View style={styles.categories}>
            <Text>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.alias}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  subHeaders: { fontSize: 20, fontWeight: '700', marginBottom: 10 },
  categories: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#6f6db439',
    padding: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
});

export default Categories;
