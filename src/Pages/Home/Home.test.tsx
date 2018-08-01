import * as React from 'react'
import { shallow, configure } from 'enzyme';
import Home from "./Home";
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

//import { Data } from "./MockData"
// it('renders without crashing', () => {
//   const rendered = renderer.create(<App />).toJSON()
//   expect(rendered).toMatchSnapshot()
//   expect(rendered).toBeTruthy()
// })
//configure({ adapter: new ReactSixteenAdapter() })


describe('Home testcases', () => {

  it('should render component', () => {
    expect(<Home />).toBeTruthy();
  });
});
