import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type DetailsHeaderProps = { is_closed: boolean; name: string };


const DetailsHeader = ({ is_closed, name }: DetailsHeaderProps) => {
  return (
    <View style={styles.header}>
      <Text style={styles.name}>{name}</Text>
      <Text style={{ color: is_closed ? 'red' : '#1ca51c', fontWeight: '600' }}>{is_closed ? 'Closed' : 'Open'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
  },
});
export default DetailsHeader;
