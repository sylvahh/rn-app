import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const Photos = ({ photos }: { photos: string[] }) => {
  return (
    <View>
      <Text style={styles.subHeaders}>Photos</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={photos}
        renderItem={({ item }) => <Image source={{ uri: item }} alt={'photos'} style={styles.photos} />}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  subHeaders: { fontSize: 20, fontWeight: '700', marginBottom: 10 },
  photos: {
    width: 200,
    height: 200,
    objectFit: 'cover',
    marginLeft: 10,
    borderRadius: 5,
  },
});

export default Photos;
