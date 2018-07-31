import * as React from 'react'
import { shallow,configure } from 'enzyme';
import BillCard from  "./BillCard.component";
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

// it('renders without crashing', () => {
//   const rendered = renderer.create(<App />).toJSON()
//   expect(rendered).toMatchSnapshot()
//   expect(rendered).toBeTruthy()
// })
configure({ adapter: new ReactSixteenAdapter() })


describe('BillCard Testcases', () => {
  it('should render component', () => {
   expect(<BillCard name="Bills" month="Jan" budget={2000} />).toBeTruthy();
  });

  it('should throw error as required prop Budget is missing', () => {
    expect(()=>    <BillCard name="Bills" month="Jan"  /> ).toThrow()
   });
});