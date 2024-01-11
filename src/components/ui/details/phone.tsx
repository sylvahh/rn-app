import React from 'react';
import { TouchableOpacity, Linking, Text } from 'react-native';

const Phone = ({ phoneNumber }: { phoneNumber: string }) => {
  const url = `tel:${phoneNumber}`;
  const handlePhoneLink = () => {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          alert('Phone number linking is not supported on this device.');
          console.error('Phone number linking is not supported on this device.');
        }
      })
      .catch((error) => {
        alert('Error opening phone dialer: ' + error);
        throw error;
      });
  };

  return (
    <TouchableOpacity onPress={handlePhoneLink}>
      <Text style={{ textDecorationLine: 'underline', color: 'blue' }}>{phoneNumber}</Text>
    </TouchableOpacity>
  );
};

export default Phone;
