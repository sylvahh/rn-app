import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { View, TextInput, StyleSheet, Text } from 'react-native';

type SearchBarProp = {
  searchedText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
  disableInput: boolean
};
const SearchBar = ({ searchedText,disableInput, setSearchText, handleSearch }: SearchBarProp) => {
  return (
    <View style={styles.container}>
      <AntDesign name='search1' size={24} color='black' style={styles.icon} />
      <TextInput
        editable={!disableInput}
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='search'
        style={styles.input}
        value={searchedText}
        onChangeText={(newText) => setSearchText(newText)}
        onEndEditing={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#d1d1d1',
    borderRadius: 10,
    height: 45,
    padding:10,
  },

  input: {
    flex: 1,
    fontSize: 20,
  },
  icon: {
    alignSelf: 'center',
  },
});

export default SearchBar;
