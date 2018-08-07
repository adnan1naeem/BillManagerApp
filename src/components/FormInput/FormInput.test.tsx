import * as React from 'react'
import { shallow, configure } from 'enzyme';
import FormInput from "./FormInput.component";
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

module.exports = {};
configure({ adapter: new Adapter() })

describe('FormPicker Input unit Tests', () => {

  test('if FormPickerInput renders correctly ', () => {
    shallow(<FormInput IconColor="" IconName="test" IconSize={20} onValueChange={() => event} label="label" value="Name" />);
  });

  test('FormPickerInput SnapShot Test', () => {
    const tree = renderer.create(<FormInput IconColor="" IconName="test" IconSize={20} onValueChange={() => event} label="label" value="Name" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
