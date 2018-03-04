import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Settings from './Settings';

function setup() {
    return shallow(<Settings/>);
}

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).toEqual(true);
  });
  it('has correct title', () => {
      const wrapper = setup();
      expect(wrapper.find('h1').text()).toEqual('Settings');
  });
  
});
