/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { LiveCommentary } from './src/components/LiveCommentary/LiveCommentary';
import { Commentary, KeyMoment } from './src/models';

type Props = {};
export default class App extends Component<Props> {
  render() {

    const commentaries: Commentary[] = [
      {
        description: 'Dier goes into the book in what is the first yellow card of the game',
        id: 1,
        minute: 12,
      },
      {
        description: 'Kane is desperate to catch Liverpool\'s Salah in the race for the Golden Boot, but he won\'t do it like that - the England man has just hammered a wild shot from range well off target.',
        id: 2,
        minute: 14,
      },
      {
        description: 'Now Alli gets a booking as he checks Sterling and the visitors have a free-kick',
        id: 3,
        minute: 17,
      },
      {
        description: 'AND THERE IS THE GOAL! No mistake from Kane, as - after initially missing Son\'s cross, he gets back up off the turf to cushion in Trippier\'s pinpoint cut-back.',
        id: 4,
        minute: 21,
      },
      {
        description: 'SAVE! Sanchez curls a free-kick towards the left-hand corner, bıt Lloris reacts quickly to jump to his right and make the stop.',
        id: 5,
        minute: 28,
      },
      {
        description: 'Pochettino\'s bravery has a paid off. He kept two up top, even though Moura was about to go off few minutes ago. and Tottenham\'s strike duo combined there brilliantly - Kane carving through United\'s shambolic lines with a neat pass, ad Moura doing the rest.',
        id: 6,
        minute: 29,
      }
    ];

    const keyMoments: KeyMoment[] = [
      {
        id: 1,
        commentaryId: 1,
        minute: 12,
        summary: 'Yellow Card',
      },
      {
        id: 2,
        commentaryId: 4,
        minute: 21,
        summary: 'Goal',
      },
      {
        id: 3,
        commentaryId: 5,
        minute: 28,
        summary: 'Save',
      },
    ];

    return (
      <LiveCommentary
        commentaries={commentaries}
        keyMoments={keyMoments}
      />
    );
  }
}
