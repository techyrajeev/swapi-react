import React                      from 'react';
import { expect }                 from 'chai';
import { shallow, mount, render } from 'enzyme';
import Footer                     from '../../src/components/footer';

describe("<Footer />", () => {
    it("contains footer html tag", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.type()).to.equal('footer');
    });
});
