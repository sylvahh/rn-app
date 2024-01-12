import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { BUSINESSES, RootStackParamList } from '../../../global.type';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { imagePlaceHolder } from '../../../constants/assets';

type ResturantCardProps = {
  businesses: BUSINESSES;
  fullWidth: boolean;
};

const BusinessCard = ({ businesses, fullWidth }: ResturantCardProps) => {
  const { id, image_url, name, rating, review_count, alias } = businesses;
  const Navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleDetails = () => {
    Navigation.navigate('Details', { id });
  };

  return (
    <TouchableOpacity onPress={handleDetails} style={!fullWidth ? styles.fullWidthContainer : styles.container}>
      <Image
        source={{ uri: image_url }}
        loadingIndicatorSource={imagePlaceHolder}
        alt={alias}
        style={!fullWidth ? styles.imageFullwidth : styles.image}
      />
      <Text style={styles.title}> {name}</Text>
      <View style={styles.reviews}>
        <Text style={styles.reviewText}>{rating} rating</Text>
        <Text style={styles.reviewText}>{review_count} reviews</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    gap: 10,
    marginRight: 10,
  },
  fullWidthContainer: {
    paddingVertical: 10,
    gap: 10,
  },
  imageFullwidth: {
    width: 'auto',
    height: 300,
    borderRadius: 5,
    objectFit: 'cover',
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 5,
    objectFit: 'cover',
  },
  title: {
    textTransform: 'capitalize',
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },

  reviews: {
    flexDirection: 'row',
    gap: 5,
  },

  reviewText: {
    color: 'gray',
  },
});

export default BusinessCard;

// skema

export const ResturantCardSkema = () => {
  return (
    <View style={skemaStyles.container}>
      <Text style={skemaStyles.title} />
      <Text style={skemaStyles.reviewText} />
    </View>
  );
};

const skemaStyles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    padding: 10,
    gap: 10,
    marginRight: 10,
    width: 300,
    height: 200,
    backgroundColor: '#d1d1d192',
    borderRadius: 5,
  },

  title: {
    width: 150,
    backgroundColor: '#d1d1d1d5',
  },
  reviewText: {
    width: 200,
    backgroundColor: '#d1d1d1d5',
  },
});
