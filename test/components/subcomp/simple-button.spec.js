import React                      from 'react';
import { expect }                 from 'chai';
import { shallow, mount, render } from 'enzyme';
import SimpleButton               from '../../../src/components/subcomp/simple-button';

describe("<SimpleButton />", () => {
    it("SimpleButton has correct styles set", () => {
        const wrapper = shallow(<SimpleButton classNames="tst">test</SimpleButton>);
        expect(wrapper.hasClass('tst')).to.equal(true);
    });

    it("SimpleButton has correct element type set", () => {
        const wrapper = shallow(<SimpleButton classNames="tst">test</SimpleButton>);
        expect(wrapper.type()).to.equal('button');
    });

    it("SimpleButton renders children elements correctly", () => {
        const wrapper
        = shallow(
            <SimpleButton classNames="tst">
                <i classNames="y"></i>
            </SimpleButton>
        );
        expect(wrapper.contains(<i classNames="y"></i>)).to.equal(true);
    });

    it("SimpleButton renders button text correctly", () => {
        const btnText = "submit";
        const wrapper
        = shallow(
            <SimpleButton classNames="tst">
                {btnText}
            </SimpleButton>
        );
        expect(wrapper.text()).to.equal(btnText);
    });

    it("SimpleButton sets click handler correctly", () => {
        const btnText = "submit";
        let count = { c : 0 };
        const whenClicked=() => count.c = count.c + 1
        const wrapper
        = shallow(
            <SimpleButton
                classNames="tst"
                whenClicked={whenClicked}
            >
                {btnText}
            </SimpleButton>
        );
        wrapper.simulate('click');
        expect(count.c).to.equal(1);
    });

});
