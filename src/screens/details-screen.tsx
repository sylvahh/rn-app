import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Animated, Easing, FlatList } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { NavigationScreenProp } from 'react-navigation';
import { BUSINESS_ID, RootStackParamList } from '../global.type';
import { makeApiRequest } from '../api/api';
import { Entypo } from '@expo/vector-icons';
import Phone from '../components/ui/details/phone';
import Address from '../components/ui/details/address';
import Categories from '../components/ui/details/categories';
import Photos from '../components/ui/details/photos';
import DetailsHeader from '../components/ui/details/details-header';
import OpeningHours from '../components/ui/details/opening-hours';

type DetailsScreenProps = {
  navigation: NavigationScreenProp<RootStackParamList>;
};

interface DataItem {
  key: string;
  component: React.ReactNode;
}
const DetailsScreen: React.FC<DetailsScreenProps> = () => {
  
  const [businessDetails, setBusinessetails] = React.useState<BUSINESS_ID | null>(null);
  const [gettingDetails, setGettingDetails] = React.useState(true);

  const route = useRoute<RouteProp<RootStackParamList, 'Details'>>();
  const { id } = route.params;

  React.useEffect(() => {
    makeApiRequest(`/v3/businesses/${id}`, 'GET')
      .then((res) => {
        setBusinessetails(res);
      })
      .catch((err) => {
        alert(err.error.description);
        throw err;
      })
      .finally(() => setGettingDetails(false));
  }, []);

  if (gettingDetails) return <DetailsSkema />;

  const { image_url, name, review_count, is_closed, rating, location, phone, photos, categories, hours } = businessDetails!;

  const address = location.display_address.map((addy) => addy).join(' ');

  const data = [
    { key: 'header', component: <DetailsHeader name={name} is_closed={is_closed} /> },
    { key: 'image', component: <Image source={{ uri: image_url }} alt={name} style={styles.image} /> },
    {
      key: 'reviews',
      component: (
        <View style={styles.reviews}>
          <Text style={styles.reviewText}>Rating {rating}</Text>
          <Text style={styles.reviewText}>Review {review_count}</Text>
        </View>
      ),
    },
    {
      key: 'address',
      component: (
        <View style={{ flexDirection: 'row', gap: 5 }}>
          <Entypo name='location-pin' size={24} color='gray' />
          <Address address={address} />
        </View>
      ),
    },
    {
      key: 'phone',
      component: (
        <View style={{ flexDirection: 'row', gap: 5 }}>
          <Entypo name='phone' size={24} color='gray' />
          <Phone phoneNumber={phone} />
        </View>
      ),
    },
    { key: 'categories', component: <Categories categories={categories} /> },
    { key: 'photos', component: <Photos photos={photos} /> },
    { key: 'openingHours', component: <OpeningHours openingHours={hours} /> },
  ];

  const renderItem = ({ item }: { item: DataItem }) => <View style={styles.container}>{item.component}</View>;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
      showsVerticalScrollIndicator={false}
    />
  );
};

export const DetailsSkema = () => {
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
    <Animated.View style={[styles.container, animatedStyles]}>
      <View style={styles.SkemaHeader}>
        <Text style={styles.skemaText} />
        <Text style={styles.skemaText2} />
      </View>
      <View style={styles.SkemaImage} />
      <View style={styles.SkemaHeader}>
        <Text style={styles.skemaText2} />
        <Text style={styles.skemaText2} />
      </View>

      <View style={{ paddingVertical: 10, gap: 10 }}>
        <Text style={styles.skemaText} />
        <Text style={styles.skemaText2} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={false}>
        <Text style={styles.skemaText} />
        <View style={{ flexDirection: 'row', gap: 10, marginHorizontal: 5 }}>
          <View style={styles.skemaPhotos} />
          <View style={styles.skemaPhotos} />
          <View style={styles.skemaPhotos} />
        </View>
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    margin: 10,
    gap: 10,
  },

  reviews: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reviewText: {
    color: 'gray',
  },
  image: {
    width: 'auto',
    height: 250,
    borderRadius: 5,
    objectFit: 'cover',
  },

  SkemaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SkemaImage: {
    width: 'auto',
    height: 250,
    borderRadius: 5,
    backgroundColor: '#d1d1d192',
  },
  skemaText: {
    paddingVertical: 5,
    width: 200,
    backgroundColor: '#d1d1d1d5',
    borderRadius: 3,
  },
  skemaText2: {
    paddingVertical: 5,
    width: 100,
    backgroundColor: '#d1d1d1d5',
    borderRadius: 3,
  },
  skemaPhotos: {
    width: 200,
    height: 200,
    marginLeft: 10,
    borderRadius: 5,
    backgroundColor: '#d1d1d192',
  },
});

export default DetailsScreen;

// backgroundColor: '#d1d1d192',  #d1d1d1d5
