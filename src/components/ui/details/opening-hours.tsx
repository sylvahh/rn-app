import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { OPENING_HOURS } from '../../../global.type';
import WorkingHours from './working-hours';

type OpeningHoursProps = {
  openingHours: OPENING_HOURS[];
};

const OpeningHours = ({ openingHours }: OpeningHoursProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<Text style={styles.subHeaders}>Opening hours</Text>}
        data={openingHours}
        renderItem={({ item , index}) => {
          return <WorkingHours hours={item} key={index} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  subHeaders: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
});

export default OpeningHours;
