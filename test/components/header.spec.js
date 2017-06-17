import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Header from '../../src/components/header.jsx';

describe("<Header />", () => {
    it("Header contains navbar", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.is('.navbar')).to.equal(true);
    });

    it("Header contains brand name", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find(".navbar-brand > span").text()).to.equal('React Notification Tester');
    });

});
