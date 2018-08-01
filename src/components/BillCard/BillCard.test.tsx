import * as React from 'react'
import { shallow, configure, mount } from 'enzyme';
import BillCard from "./BillCard.component";
import Adapter from 'enzyme-adapter-react-16';
import TestUtils from 'react-addons-test-utils';
import { Data } from "./MockData"
import ReactDOM from "react-dom"


//configure({adapter: new Adapter()})
describe('BillCard Testcases', () => {
  it('should render component', () => {
    expect(<BillCard name={Data.name} month={Data.month} budget={Data.budget} />).toBeDefined();
  });

});

describe('BillCard missing Props test ', () => {

  it('should throw error as required prop Budget is missing', () => {
    let error
    try {
      shallow(<BillCard name={Data.name} month={Data.month} />)
    } catch (e) {
      error = e
    }
    expect(error).toBeDefined()
  });


  it('should throw error as required prop month is missing', () => {
    let error
    try {
      shallow(<BillCard name={Data.name} budget={Data.budget} />)
    } catch (e) {
      error = e
    }
    expect(error).toBeDefined()
  });


  it('should throw error as required prop name is missing', () => {
    let error
    try {
      shallow(<BillCard month={Data.month} budget={Data.budget} />)
    } catch (e) {
      error = e
    }
    expect(error).toBeDefined()
  });

});


describe('BillCard  Props are null test ', () => {

  it('should throw error as required prop budget is null', () => {
    let error
    try {
      shallow(<BillCard name={null} month={Data.month} budget={null} />)
    } catch (e) {
      error = e
    }
    expect(error).toBeDefined()
  });


  it('should throw error as required prop month is null', () => {
    let error
    try {
      shallow(<BillCard name={Data.name} month={null} budget={Data.budget} />)
    } catch (e) {
      error = e
    }
    expect(error).toBeDefined()
  });


  it('should throw error as required prop name is null', () => {
    let error
    try {
      shallow(<BillCard name={null} month={Data.month} budget={Data.budget} />)
    } catch (e) {
      error = e
    }
    expect(error).toBeDefined()
  });

});


describe('BillCard  Props are null undefined ', () => {

  it('should throw error as required prop name is undefined', () => {
    let error
    try {
      shallow(<BillCard name={undefined} month={Data.month} budget={Data.budget} />)
    } catch (e) {
      error = e
    }
    expect(error).toBeDefined()
  });


  it('should throw error as required prop month is undefined', () => {
    let error;
    try {
      shallow(<BillCard name={Data.name} month={undefined} budget={Data.budget} />)
    } catch (e) {
      error = e;
    }
    expect(error).toBeDefined()
  });


  it('should throw error as required prop budget is undefined', () => {
    let error
    try {
      shallow(<BillCard name={Data.name} month={Data.month} budget={undefined} />)
    } catch (e) {
      error = e
    }
    expect(error).toBeDefined()
  });



  it('should throw error as required prop budget is undefined', () => {
    let error
    try {
      shallow(<BillCard name={Data.name} month={Data.month} budget={undefined} />)
    } catch (e) {
      error = e
    }
    expect(error).toBeDefined()
  });


  it('should throw error as required prop budget is undefined', () => {
    let error
    try {
      shallow(<BillCard name={Data.name} month={Data.month} budget={undefined} />)
    } catch (e) {
      error = e
    }
    expect(error).toBeDefined()
  });
});

  // it('should throw error as  BllCard', () => {
  //     const wrapper=shallow(<BillCard name={Data.name} month={Data.month} budget={undefined} />)

  //   expect(wrapper.find('View')).toBeDefined()
  // });



