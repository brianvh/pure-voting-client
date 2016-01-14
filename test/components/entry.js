import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'

import entry from '../../src/components/entry'

const Entry = entry(React);

describe('<Entry />', () => {
  it('given no name or count: renders an empty <div>', () => {
    const expected = <div></div>;
    const actual = shallow(<Entry />).get(0);

    expect(actual).to.deep.equal(expected);
  });

  it('given an name and count: renders the full entry', () => {
    const props = {name: 'Trainspotting', count: 2 };
    const actual = shallow(<Entry { ...props } />).get(0);
    const expected = (
      <div className="entry">
        <h1>Trainspotting</h1>
        <div className="voteCount">2</div>
      </div>
    );
    expect(actual).to.deep.equal(expected);
  });

  it('given name & no count: renders entry with 0 count', () => {
    const props = {name: 'Trainspotting'};
    const actual = shallow(<Entry { ...props } />).get(0);
    const expected = (
      <div className="entry">
        <h1>Trainspotting</h1>
        <div className="voteCount">0</div>
      </div>
    );
    expect(actual).to.deep.equal(expected);
  });
});
