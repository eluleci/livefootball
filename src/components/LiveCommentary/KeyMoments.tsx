import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { grayDark } from '../../constants/colors';
import { KeyMoment } from '../../models';
import { KeyMomentRow } from './KeyMomentRow';

interface Props {
  // used for showing collapsed or expanded view
  isExpanded: boolean

  // called when a key moment is clicked
  onKeyMomentClick: (keyMoment: KeyMoment) => void

  // called when toggle button is clicked
  onToggle: () => void

  // list to show
  keyMoments: KeyMoment[]
}

/**
 * Displays key moment list. The view is expandable and collapsible with
 * the isExpanded and onToggle props.
 */
export class KeyMoments extends Component<Props> {

  render() {
    const { isExpanded, keyMoments, onKeyMomentClick, onToggle } = this.props;

    return (
      <View style={styles.container}>

        <View>
          <Text style={styles.title}>
            Key moments
          </Text>

          <TouchableHighlight
            onPress={onToggle}
            style={styles.button}
            activeOpacity={0.6}
            underlayColor={'transparent'}
          >
            <Image
              source={getToggleButtonIcon(isExpanded)}
              style={styles.buttonIcon}
            />
          </TouchableHighlight>
        </View>

        {isExpanded && keyMoments.map(keyMoment => (
          <TouchableHighlight
            key={keyMoment.id}
            onPress={() => onKeyMomentClick(keyMoment)}
            activeOpacity={0.6}
            underlayColor={'#ffffff88'}
          >
            <KeyMomentRow keyMoment={keyMoment}/>
          </TouchableHighlight>
        ))
        }

      </View>
    );
  }
}

/**
 * Imports and returns the suitable icon based on the expand status.
 *
 * @param isExpanded
 */
function getToggleButtonIcon(isExpanded: boolean) {
  return isExpanded
    ? require('../../../assets/icons/chevron-down.png')
    : require('../../../assets/icons/chevron-up.png');
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: grayDark,
  },
  title: {
    color: grayDark,
    width: '100%',
    height: 40,
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 20,
    fontWeight: 'bold'
  },
  button: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 6
  },
  buttonIcon: {
    height: 26,
    width: 26,
  }
});
