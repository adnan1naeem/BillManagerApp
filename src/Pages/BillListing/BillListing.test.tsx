import * as React from 'react'
import { shallow,configure } from 'enzyme';
import BillListing from  "./BillListing";
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

// it('renders without crashing', () => {
//   const rendered = renderer.create(<App />).toJSON()
//   expect(rendered).toMatchSnapshot()
//   expect(rendered).toBeTruthy()
// })
//configure({ adapter: new ReactSixteenAdapter() })


describe('BillCard Testcases', () => {
  
  it('should render component', () => {
   expect(<BillListing  data={}  />).toBeTruthy();
  });
  
  it('should throw error as required prop data is null', () => {
    let error
    try {
      shallow(<BillListing data={null}  />)
    } catch (e) {
      error = e
    }
    expect(error).toBeDefined()
  });
});
