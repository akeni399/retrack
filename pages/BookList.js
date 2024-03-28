import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
});


const BookList = () => {
  return (
    <View style={[styles.center, {top: 50}]}>
      <Text>book list </Text>
    </View>
  );
};

export default BookList;