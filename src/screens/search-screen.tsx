import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import SearchBar from '../components/ui/business/search-bar';
import { makeApiRequest } from '../api/api';
import { BUSINESSES, RootStackParamList } from '../global.type';
import BusinessCategories, { ResturantCategoriesSkema } from '../components/ui/business/business-category';
import { noData } from '../constants/assets';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAuth } from '../context/auth-context';

interface SearchScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Search'>;
}

const LOCATION = 'NYC';

const SearchScreen = () => {
  const [searchedText, setSearchText] = React.useState('');
  const [searchedTitle, setSearchedTitle] = React.useState('');
  const [businesses, setBusinesses] = React.useState<BUSINESSES[]>([]);
  const [disableInput, setDisableInput] = React.useState(false);
  const [isLoading, setIsLoadig] = React.useState(true);

  React.useEffect(() => {
    makeApiRequest(`/v3/businesses/search?location=${LOCATION}&term=food&limit=50`, 'GET')
      .then((res) => {
        setBusinesses(res.businesses);
        setIsLoadig(false);
      })
      .catch((err) => {
        alert(err.error.description);
        throw err;
      });
  }, []);

  const handleSearch = () => {
    if (!searchedText.trim()) return;

    setIsLoadig(true);
    setDisableInput(true);
    makeApiRequest(`/v3/businesses/search?location=${LOCATION}&term=${searchedText.trim()}`, 'GET')
      .then((res) => {
        setBusinesses(res.businesses);
        setIsLoadig(false);
        setSearchedTitle(searchedText);
        setSearchText('');
      })
      .catch((err) => {
        alert(err.error.description);
        throw err;
      })
      .finally(() => {
        setDisableInput(false);
      });
  };
  return (
    <View style={styles.container}>
      <SearchBar
        disableInput={disableInput}
        searchedText={searchedText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
      />
      {isLoading ? (
        <ResturantCategoriesSkema />
      ) : (
        businesses.length > 0 && <BusinessCategories searchedTitle={searchedTitle} businesses={businesses} />
      )}

      {/* no data found  */}
      {!isLoading && businesses.length < 1 && (
        <View style={styles.noDataContainer}>
          <Image source={noData} alt='no data' style={styles.noDataImage} />
          <Text style={styles.noDataText}>oops!...no match found.</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 50,
  },
  noDataContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    height: 500,
  },

  noDataImage: {
    width: 400,
    height: 300,
    borderTopColor: 'black',
    objectFit: 'contain',
  },

  noDataText: {
    fontSize: 20,
    color: 'gray',
    fontWeight: '800',
  },
});

export default SearchScreen;
