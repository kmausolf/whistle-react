import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Register from './Register';

function setup() {
    return shallow(<Register/>);
}

/*
describe('Testing register', () => {
 
  it('has correct title', () => {
      const wrapper = setup();
      expect(wrapper.find('h1').text()).toEqual('Register');
      expect(wrapper.find('RegisterForm')).toExist();
  });
}); */