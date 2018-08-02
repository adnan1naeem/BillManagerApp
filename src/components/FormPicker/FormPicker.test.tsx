import * as React from 'react'
import { shallow, configure } from 'enzyme';
import FormPicker from "./FormPicker.component";
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { Data } from "./MockData"
module.exports = {};
configure({ adapter: new Adapter() })

describe('FormPicker Input unit Tests', () => {

  test('if FormPickerInput renders correctly ', () => {
    shallow(<FormPicker
      label={Data.label}
      Items={Data.Items}
      handleChange={Data.onValueChange}
      IconName="ios-arrow-dropdown-circle"
      IconSize={0}
      IconColor="green"

    />);
  });

  test('FormPickerInput SnapShot Test', () => {
    const tree = renderer.create(<FormPicker
      label={Data.label}
      Items={Data.Items}
      handleChange={Data.onValueChange}
      IconName="ios-arrow-dropdown-circle"
      IconSize={0}
      IconColor="green"

    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
