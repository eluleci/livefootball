import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { brandDark, grayDark } from '../../constants/colors';
import { Commentary } from '../../models';

interface Props {
  // commentary to show
  commentary: Commentary

  // used for hiding the continuity border on top
  isHead: boolean

  // used for hiding the continuity border on bottom
  isTail: boolean
}

/**
 * Displays a commentary row with minute and description.
 *
 * @param props
 */
export const CommentaryRow = ({ commentary, isHead, isTail }: Props) => (
  <View style={styles.container}>
    <View style={getContinuityStyle(isHead, isTail)}/>

    <View style={styles.minuteContainer}>
      <Text style={styles.minute}>
        {commentary.minute}
      </Text>
    </View>
    <Text style={styles.description}>
      {commentary.description}
    </Text>
  </View>
);

/**
 * Generates style for the continuity border.
 *
 * @param isHead
 * @param isTail
 */
function getContinuityStyle(isHead: boolean, isTail: boolean) {
  if (isHead) {
    return {
      ...styles.continuity,
      ...styles.continuityBottomOnly,
    };
  } else if (isTail) {
    return {
      ...styles.continuity,
      ...styles.continuityTopOnly,
    };
  }
  return styles.continuity;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  minuteContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: brandDark,
    fontSize: 18,
    height: 48,
    marginHorizontal: 12,
    width: 48,
  },
  minute: {
    fontSize: 18,
  },
  description: {
    flex: 1,
    paddingRight: 12,
    fontSize: 18
  },
  continuity: {
    backgroundColor: grayDark,
    width: 1,
    position: 'absolute',
    left: 36,
    top: 0,
    bottom: 0,
  },
  continuityTopOnly: {
    bottom: undefined,
    height: 20
  },
  continuityBottomOnly: {
    top: 20
  }
});
