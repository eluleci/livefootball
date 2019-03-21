import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { brand, brandDark } from '../../constants/colors';
import { Commentary, KeyMoment } from '../../models';
import { KeyMoments } from './KeyMoments';
import { LiveCommentaryList } from './LiveCommentaryList';

interface Props {
  // commentary list to show
  commentaries: Commentary[]

  // key moment list to show
  keyMoments: KeyMoment[]
}

interface State {
  // used to expand/collapse the key moment view
  isKeyMomentsExpanded: boolean

  // used to scroll to a specific commentary when a key moment is clicked
  scrolledItemIndex: number
}

export class LiveCommentary extends Component<Props, State> {

  state: State = {
    isKeyMomentsExpanded: true,
    scrolledItemIndex: 0,
  };

  render() {
    const { commentaries, keyMoments } = this.props;
    const { isKeyMomentsExpanded, scrolledItemIndex } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>
          Live commentary
        </Text>

        <View style={styles.liveCommentaryListContainer}>
          <LiveCommentaryList
            commentaries={commentaries}
            indexToScroll={scrolledItemIndex}
          />
        </View>

        <KeyMoments
          isExpanded={isKeyMomentsExpanded}
          keyMoments={keyMoments}
          onKeyMomentClick={this.onKeyMomentClick}
          onToggle={this.onToggleKeyMoments}
        />
      </SafeAreaView>
    );
  }

  /**
   * Called when a key moment is clicked.
   * @param keyMoment is the clicked item.
   */
  onKeyMomentClick = (keyMoment: KeyMoment) => {
    const index = getIndexOfItem(this.props.commentaries, keyMoment.commentaryId);
    if (index > -1) {
      this.setState({ scrolledItemIndex: index });
    }
  };

  /**
   * Called when key moment view's expand/collapse button is clicked.
   */
  onToggleKeyMoments = () => {
    this.setState({ isKeyMomentsExpanded: !this.state.isKeyMomentsExpanded });
  };
}

/**
 * Returns the index of the item with the given id.
 * @param list to search from.
 * @param id to search.
 */
function getIndexOfItem(list: Commentary[], id: number): number {
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].id === id) {
      return i;
    }
  }
  return -1;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: brand,
    fontSize: 20,
    fontWeight: 'bold',
    color: brandDark,
    padding: 16,
    textAlign: 'center',
  },
  liveCommentaryListContainer: {
    flex: 1,
  },
  keyMomentsContainer: {}
});
