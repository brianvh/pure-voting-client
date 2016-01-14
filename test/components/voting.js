import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'

import vote from '../../src/components/vote'
import winner from '../../src/components/winner'
import voting from '../../src/components/voting'

const Vote = vote(React);
const Winner = winner(React);
const Voting = voting({React, Vote: Vote, Winner: Winner});

describe('<Voting />', () => {
  it('rendered with no pair, returns an empty <div>', () => {
    const expected = <div></div>;
    const actual = shallow(<Voting />).get(0);
    expect(actual).to.deep.equal(expected);
  });

  it.only('renders 2 <Vote /> components, when given a pair', () => {
    const props = { pair: ['Trainspotting', '28 Days Later'] };
    const $ = shallow(<Voting { ...props } />);
    const expected = (
      <div>
        <Vote entry="Trainspotting" />
        <Vote entry="28 Days Later" />
      </div>
    );
    console.log($.html());
    expect($.get(0)).to.deep.equal(expected);
  });

  it('renders a <Winner /> component, when a winner is set', () => {
    const props = {
      pair: ['Trainspotting', '28 Days Later'],
      winner: 'Trainspotting'
    };
    const $ = shallow(<Voting { ...props } />);
    const expected = (
      <div>
        <Winner winner="Trainspotting" />
      </div>
    );
    expect($.get(0)).to.deep.equal(expected);
  });
});
