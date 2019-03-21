import React, { Component } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { Commentary } from '../../models';
import { CommentaryRow } from './CommentaryRow';

interface Props {

  // list to show
  commentaries: Commentary[]

  // index of the item to scroll to
  indexToScroll: number
}

export class LiveCommentaryList extends Component<Props> {

  // FlatList reference is kept for scrolling to a specific index
  list?: FlatList<Commentary>;

  componentDidUpdate(prevProps: Readonly<Props>) {

    // check if the indexToScroll prop is changed
    if (prevProps.indexToScroll !== this.props.indexToScroll && this.list) {

      // scroll to the index if the prop is changed
      this.list.scrollToIndex({
        animated: true,
        index: this.props.indexToScroll
      });
    }
  }

  render() {
    const { commentaries } = this.props;

    return (
      <FlatList
        ref={ref => this.list = ref!}
        data={commentaries}
        keyExtractor={item => String(item.id)}
        renderItem={(info: ListRenderItemInfo<Commentary>) => (
          <CommentaryRow
            key={info.item.id}
            commentary={info.item}
            isHead={info.index === 0}
            isTail={info.index === commentaries.length - 1}
          />
        )}
      />
    );
  }
}
