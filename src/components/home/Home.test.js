import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import HomePage from './HomePage';
import LoginForm from './LoginForm';

function setup() {
    return shallow(<HomePage/>);
}

describe('Our first test', () => {
  
  it('has correct title', () => {
      const wrapper = setup();
      expect(wrapper.find('h1').text()).toEqual('Whistle!');
      expect(wrapper.find('h2').text()).toEqual('Call for a walker?');
  });
  it('has correct title', () => {
    const wrapper = setup();
    expect(wrapper.find('LoginForm').text()).toExist();
});
});
