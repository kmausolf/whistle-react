import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Results_Walkers from './Results_Walkers';
import Ads from './Ads';
import Card from './Card';
function setup() {
    return shallow(<Results_Walkers/>);
}

function setupAds() {
    return shallow(<Ads/>);
}
function setupCard() {
    const props = {
            key: 2,
            name: "test",
            title: "test",
            bio: "test",
            avatar_url: "test"
    }
    return shallow(<Card{...props} />);
}

describe('Testing Results_Walker/Sitter', () => {
 
  it('has correct title', () => {
      const wrapper = setup();
      expect(wrapper.find('h2').text()).toEqual('Here are some available Walkers near you!');
      expect(wrapper.find('Ads')).toExist();
  });
});
/*
describe('Testing Ads', () => {
 
    it('Do we have a search bar and button?', () => {
        const wrapper = setupAds();
        expect(wrapper.find('button').text()).toEqual('Search');
        expect(wrapper.find('input')).toExist();
       
        
    });
  });

 
describe('Testing Card', () => {
    it('Has the correct attributes', () => {
        const wrapper = setupCard();
        expect(wrapper.find('img')).toExist();
        expect(wrapper.find('h2').length).toBe(1);
        expect(wrapper.find('p').length).toBe(1);  //are all attributes printed?
      });
}); */