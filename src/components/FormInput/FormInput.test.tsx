import * as React from 'react'
import { shallow, configure } from 'enzyme';
import FormInput from "./FormInput.component";
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

import { Data } from "./MockData";

// it('renders without crashing', () => {
//   const rendered = renderer.create(<App />).toJSON()
//   expect(rendered).toMatchSnapshot()
//   expect(rendered).toBeTruthy()
// })
//configure({ adapter: new ReactSixteenAdapter() })


describe('FormInput Testcases', () => {

  it('should render component', () => {
    expect(<FormInput
      label={Data.label}
      onValueChange={Data.onValueChange} />).toBeTruthy();
  });

});


describe('FormInput props are missing Testcases', () => {

  it('should throw error as required prop onValueChange is missing', () => {
    let error
    try {
      shallow(<FormInput
        title={Data.label} />)
    } catch (e) {
      error = e
    }
    expect(error).toBeDefined()
  });


  it('should throw error as required prop title is missing', () => {
    let error
    try {
      shallow(<FormInput
        title={Data.label}
      />)
    } catch (e) {
      error = e
    }
    expect(error).toBeDefined()
  });
});


describe('FormInput props are undefined Testcases', () => {

  it('should throw error as required prop title is undefined', () => {
    let error
    try {
      shallow(<FormInput
        title={undefined}
        onValueChange={Data.onValueChange} />)
    } catch (e) {
      error = e
    }
    expect(error).toBeDefined()
  });

  it('should throw error as required prop onValueChange is undefined', () => {
    let error
    try {
      shallow(<FormInput
        title={Data.label}
        onValueChange={undefined} />)
    } catch (e) {
      error = e
    }
    expect(error).toBeDefined()
  });


});