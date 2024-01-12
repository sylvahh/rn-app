import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { OPENING_HOURS } from '../../../global.type';
import { FlatList } from 'react-native-gesture-handler';

const DAYS = {
  0: 'Monday',
  1: 'Tuesday',
  2: 'Wednesday',
  3: 'Thursday',
  4: 'Friday',
  5: 'Saturday',
  6: 'Sunday',
};

type HoursProps = {
  hours: OPENING_HOURS;
};
const WorkingHours = ({ hours }: HoursProps) => {
  const { open } = hours;
  return (
    <View>
      {open.map((item) => (
        <View key={item.day} style={styles.container}>
          <Text style={{ fontSize: 16, fontWeight: '700' }}>{DAYS[item.day as keyof typeof DAYS]}</Text>
          <Text>
            {item.is_overnight
              ? '24 Hours'
              : `Open ${`${item.start.slice(0, 2)}:${item.start.slice(2)}`} - Close ${`${item.end.slice(0, 2)}:${item.end.slice(2)}`}`}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', gap: 5, marginBottom: 5 },
});

export default WorkingHours;
