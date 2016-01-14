import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'

import vote from '../../src/components/vote'

const Vote = vote(React);

describe('<Vote />', () => {
  const entry = 'Trainspotting';

  it('renders a <button> for the named entry', () => {
    const props = { entry: 'Trainspotting' };
    const $ = shallow(<Vote { ...props } />);
    const expected = (
      <div>
        <button onClick={() => {}} disabled={false}>
          <h1>{props.entry}</h1>
        </button>
      </div>
    );

    expect($.get(0)).to.deep.equal(expected);
  });

  it('runs the vote callback when clicked', () => {
    let receiver;
    const voteFor = (entry) => receiver = entry;
    const props = { entry: 'Trainspotting', vote: voteFor };

    const $ = shallow(<Vote { ...props } />);
    $.find('button').simulate('click');

    expect(receiver).to.equal('Trainspotting');
  });

  it("disables the <button> when the viewer has voted", () => {
    const props = { entry: entry, hasVoted: entry };

    const $ = shallow(<Vote { ...props } />);
    const button = $.find('button');

    expect(button.prop('disabled')).to.be.true;
  });

  it("displays a <label> on the voted entry", () => {
    const props = { entry: entry, hasVoted: entry };

    const $ = shallow(<Vote { ...props } />);
    const label = $.find('.label');
    const expected = <div className="label">Voted</div>;

    expect(label.get(0)).to.deep.equal(expected);
  });
});
