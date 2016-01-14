import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'

import entry from '../../src/components/entry'
import next from '../../src/components/next'
import winner from '../../src/components/winner'
import results from '../../src/components/results'

const Entry = entry(React);
const Next = next(React);
const Winner = winner(React);
const Results = results({React, Entry: Entry, Next: Next, Winner: Winner});

describe('<Results />', () => {
  it('given no tally or winner: renders only a <Next />', () => {
    const expected = (
      <div className="results">
        <Next />
      </div>
    );
    const actual = shallow(<Results />).get(0);

    expect(actual).to.deep.equal(expected);
  });

  it('given a tally, no winner: renders 2 <Entry />s and <Next />', () => {
    const props = {
      tally: { "Trainspotting": 3, "28 Days Later": 2 }
    }
    const expected = (
      <div className="results">
        <Entry name="Trainspotting" count={3} />
        <Entry name="28 Days Later" count={2} />
        <Next />
      </div>
    );
    const actual = shallow(<Results {...props} />).get(0);

    expect(actual).to.deep.equal(expected);
  });

  it('given a winner: renders only a <Winner />', () => {
    const props = {
      tally: { "Trainspotting": 3, "28 Days Later": 2 },
      winner: "Trainspotting"
    }
    const expected = <Winner winner="Trainspotting" />;
    const actual = shallow(<Results {...props} />).get(0);

    expect(actual).to.deep.equal(expected);
  });
});
