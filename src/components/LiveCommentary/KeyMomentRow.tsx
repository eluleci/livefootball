import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { KeyMoment } from '../../models';

interface Props {
  keyMoment: KeyMoment
}

/**
 * Displays a key moment info with minute and summary.
 *
 * @param props
 */
export const KeyMomentRow = ({ keyMoment }: Props) => (
  <View style={styles.container}>
    <Text style={styles.minute}>
      {keyMoment.minute}
    </Text>
    <Text style={styles.summary}>
      {keyMoment.summary}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 4
  },
  minute: {
    fontSize: 18,
    textAlign: 'center',
    width: 96,
  },
  summary: {
    fontSize: 18
  }
});
