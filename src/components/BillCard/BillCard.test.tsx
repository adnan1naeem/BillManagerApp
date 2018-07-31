import * as React from 'react'
import { shallow, configure, mount } from 'enzyme';
import BillCard from "./BillCard.component";
import Adapter from 'enzyme-adapter-react-16';
import TestUtils from 'react-addons-test-utils';


configure({ adapter: new Adapter() })


describe('BillCard Testcases', () => {
  it('should render component', () => {
    expect(<BillCard name="Bills" month="Jan" budget={2000} />).toBeDefined();
  });

  it('should throw error as required prop Budget is missing', () => {
    let error
    try {
      shallow(<BillCard name="Bills" month="Jan" />)
    } catch (e) {
      error = e
    }
    expect(error).toBeDefined()
  });


  it('should throw error as required prop month is missing', () => {
    let error
    try {
      shallow(<BillCard name="Bills" budget={2000} />)
    } catch (e) {
      error = e
    }
    expect(error).toBeDefined()
  });


  it('should throw error as required prop name is missing', () => {
    let error
    try {
      shallow(<BillCard month="Jan" budget={2000} />)
    } catch (e) {
      error = e
    }
    expect(error).toBeDefined()
  });



  it('should throw error as required prop budget is null', () => {
    let error
    try {
      shallow(<BillCard name={null} month="Jan" budget={null} />)
    } catch (e) {
      error = e
    }
    expect(error).toBeDefined()
  });


  it('should throw error as required prop month is null', () => {
    let error
    try {
      shallow(<BillCard name="bill" month={null} budget={2000} />)
    } catch (e) {
      error = e
    }
    expect(error).toBeDefined()
  });


  it('should throw error as required prop name is null', () => {
    let error
    try {
      shallow(<BillCard name={null} month="Jan" budget={2000} />)
    } catch (e) {
      error = e
    }
    expect(error).toBeDefined()
  });


  it('should throw error as required prop name is undefined', () => {
    let error
    try {
      shallow(<BillCard name={undefined} month="Jan" budget={2000} />)
    } catch (e) {
      error = e
    }
    expect(error).toBeDefined()
  });


  it('should throw error as required prop month is undefined', () => {
    let error
    try {
      shallow(<BillCard name="ADNAN" month={undefined} budget={2000} />)
    } catch (e) {
      error = e
    }
    expect(error).toBeDefined()
  });


  it('should throw error as required prop budget is undefined', () => {
    let error
    try {
      shallow(<BillCard name="ADNAN" month="jan" budget={undefined} />)
    } catch (e) {
      error = e
    }
    expect(error).toBeDefined()
  });



  it('should throw error as required prop budget is undefined', () => {
    let error
    try {
      shallow(<BillCard name="ADNAN" month="jan" budget={undefined} />)
    } catch (e) {
      error = e
    }
    expect(error).toBeDefined()
  });


  it('should throw error as required prop budget is undefined', () => {
    let error
    try {
      shallow(<BillCard name="ADNAN" month="jan" budget={undefined} />)
    } catch (e) {
      error = e
    }
    expect(error).toBeDefined()
  });


  it('should render three <BillCard /> components', () => {
    const wrapper = shallow(
      <BillCard name="Bills" month="Jan" budget={2000} />
    );
    // expect(wrapper.find(Foo)).to.have.length(3);
  });

});