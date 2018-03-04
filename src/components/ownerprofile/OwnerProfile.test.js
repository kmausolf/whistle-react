import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import OwnerProfile from './OwnerProfile';

function setup() {
    return shallow(<OwnerProfile/>);
}

describe('Our first test', () => {
 
  it('has correct title', () => {
      const wrapper = setup();
      expect(wrapper.find('h1').text()).toEqual('My Profile');
  });
  it('has a profile pic, and it is set to the user pic', () => {
    const wrapper = setup();
    expect(wrapper.state('pic')).toExist();
    expect(wrapper.find('img').prop('src')).toEqual(wrapper.state('pic'));
});
it('has a button for changing the pic', () => {
  const wrapper = setup();
  expect(wrapper.find('button').text()).toEqual('Upload Image');
});
  
});
