import * as React from 'react'
import { shallow, configure } from 'enzyme';
import FormInput from "./FormInput.component";
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';


configure({ adapter: new Adapter() })

describe('InputComponent', () => {


  test('renders correctly', () => {
    shallow(<FormInput label="label" value="Name" />);
  });


  test('renders correctly', () => {
    const tree = renderer.create(<FormInput label="label" value="Name" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});

