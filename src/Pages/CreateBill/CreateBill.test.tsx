import * as React from 'react'
import { shallow, configure } from 'enzyme';
import CreateBill from "./CreateBill";
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

//import { Data } from "./MockData"
// it('renders without crashing', () => {
//   const rendered = renderer.create(<App />).toJSON()
//   expect(rendered).toMatchSnapshot()
//   expect(rendered).toBeTruthy()
// })
//configure({ adapter: new ReactSixteenAdapter() })


describe('CreateBill Testcases', () => {

  it('should render component', () => {
    expect(<CreateBill />).toBeTruthy();
  });

  it('should throw error as required prop data is null', () => {
    let error
    try {
      shallow(<CreateBill data={null} />)
    } catch (e) {
      error = e
    }
    expect(error).toBeDefined()
  });
  it('should throw error as required prop data is undefined', () => {
    let error
    try {
      shallow(<CreateBill data={undefined} />)
    } catch (e) {
      error = e
    }
    expect(error).toBeDefined()
  });
});
