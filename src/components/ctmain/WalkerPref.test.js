import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import WalkerPref from './WalkerPref';

function setup(){
    return shallow(<WalkerPref/>);
}

describe('WalkerPref tests', () => {
    it('is showing the correct preference on the button', () => {
        const wrapper = setup();
        if(wrapper.state('takingRequests')){
            expect(wrapper.find('button').text()).toEqual("I'm Taking Requests");
        }
        else{
            expect(wrapper.find('button').text()).toEqual("I'm Not Taking Requests");
        }
    });
});