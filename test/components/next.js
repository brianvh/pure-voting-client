import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'

import next from '../../src/components/next'

const Next = next(React);

describe('<Next />', () => {
  it('dispatches to its nextPair() callback when clicked', () => {
    let wasClicked;
    const testClick = () => wasClicked = true;
    const props = { nextPair: testClick };

    const $ = shallow(<Next { ...props } />);
    $.find('button').simulate('click');

    expect(wasClicked).to.be.true;
  });

  it('with no nextPair() callback, still renders correctly', () => {
    const actual = shallow(<Next />).get(0);
    const expected = <div className="management"></div>

    expect(actual).to.deep.equal(expected);
  });
});
