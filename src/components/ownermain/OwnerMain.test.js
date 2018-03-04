import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import OwnerMain from './OwnerMain';
import DatePickerForm from './DatePickerForm';
import SearchTypeForm from './SearchTypeForm';

function setup() {
    return shallow(<OwnerMain/>);
}
function setupDPF() {
    return shallow(<DatePickerForm/>);
}
function setupSTF() {
    return shallow(<SearchTypeForm/>);
}

describe('Test OwnerMain page', () => {
 
  it('has header and calendar components', () => {
      const wrapper = setup();
      expect(wrapper.find('h2').text()).toEqual('When do you need a caretaker?');
      expect(wrapper.children('div.ownerChoice').length).toEqual(1);
  });
});
describe('Test DatePickerForm ', () => {
 
    it('has header and calendar components', () => {
        const wrapper = setupDPF();
        expect(wrapper.find('day')).toExist();
        expect(wrapper.find('time')).toExist();
        expect(wrapper.find('form').length).toEqual(1);
    });
  });

describe('Test SearchTypeForm ', () => {
 
    it('has header and calendar components', () => {
        const wrapper = setupSTF();
        expect(wrapper.find('Link').length).toEqual(2);
        expect(wrapper.find('form').length).toEqual(1);
    });
});