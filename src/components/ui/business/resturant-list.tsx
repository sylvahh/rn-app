import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, Animated, Easing } from 'react-native';
import { BUSINESSES } from '../../../global.type';
import ResturantCard, { ResturantCardSkema } from './resturant-card';

type RestaurantListProps = {
  title: string;
  businesses: BUSINESSES[];
  horizontal: boolean;
};

const ResturantList = ({ title, businesses, horizontal }: RestaurantListProps) => {
  return (
    <View style={{ width: 'auto' }}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={businesses}
        renderItem={({ item }) => <ResturantCard businesses={item} fullWidth={horizontal} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    textTransform: 'capitalize',
  },
});

export default ResturantList;

export const ResturantListSkema = () => {
  const opacityValue = React.useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(opacityValue, {
        toValue: 0.2,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ]).start(() => startAnimation());
  };

  React.useEffect(() => {
    startAnimation();
  }, []);

  const animatedStyles = { opacity: opacityValue };

  return (
    <Animated.View style={[skemaStyles.container, animatedStyles]}>
      <Text style={skemaStyles.title} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ResturantCardSkema />
        <ResturantCardSkema />
        <ResturantCardSkema />
      </ScrollView>
    </Animated.View>
  );
};

const skemaStyles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    width: 150,
    backgroundColor: '#d1d1d1d5',
    marginVertical: 10,
  },
});
