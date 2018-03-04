import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import MyPets from './MyPets';
import PetCard from './PetCard';

function setupMP() {
    return shallow(<MyPets/>);
}
function setupPL() {
    const props = {
            key: 2,
            name: "test",
            breed: "test",
            insuranceNo: "test",
            meds: "test",
            medConds: "test",
            vetNo: "test",
            bio: "test",
            species:"test",
            pic: "test"
    }
    return shallow(<PetCard{...props} />);
}

describe('Testing MyPets', () => {
   
  it('Has the correct props', () => {
    const wrapper = setupMP();
    expect(wrapper.state('pets')).toExist();
    expect(wrapper.state('pic')).toExist();

  });
  it('Has the proper components', () => {
    const wrapper = setupMP();
    expect(wrapper.find('div.petForm').length).toBe(1);
    expect(wrapper.children('div.petForm')).toExist();
    expect(wrapper.find('button').text()).toEqual('Add Another Pet');
  });
});

describe('Testing PetCard', () => {
    it('Has the correct attributes', () => {
        const wrapper = setupPL();
        expect(wrapper.find('img')).toExist();
        expect(wrapper.find('h3').length).toBe(1);
        expect(wrapper.find('p').length).toBe(5);  //are all attributes printed?
      });
});