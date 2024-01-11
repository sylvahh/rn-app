import React from 'react';
import { Linking, Text, TouchableOpacity } from 'react-native';

const Address = ({ address }: { address: string }) => {
  const formattedAddress = decodeURIComponent(address);
  const url = `https://www.google.com/maps/search/?api=1&query=${formattedAddress}`;
  const handleMapLink = () => {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          alert('Map linking is not supported on this device.');
          console.error('Map linking is not supported on this device.');
        }
      })
      .catch((err) => {
        alert('Error opening map: ' + err);
        throw err;
      });
  };
  return (
    <TouchableOpacity onPress={handleMapLink}>
          <Text style={{ textDecorationLine: 'underline', color: 'blue' }} selectable
              selectionColor={'#fff'}>
        {address}
      </Text>
    </TouchableOpacity>
  );
};

export default Address;
