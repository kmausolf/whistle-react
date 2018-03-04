import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import SettingsForm from './SettingsForm';

function setup() {
    return shallow(<SettingsForm/>);
}

describe('Settings form', () => {
  
  it('renders elements onto screen', () => {
      const wrapper = setup();
      expect(wrapper.find('form').length).toBe(1);
      expect(wrapper.find('h3').length).toBe(3);
      expect(wrapper.find('input').length).toBe(2);
      expect(wrapper.find('select.pay').length).toBe(1); //checks that classname
      expect(wrapper.children('select.pay').length).toBe(1);
    });
  
});
