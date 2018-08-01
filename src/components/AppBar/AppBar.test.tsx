import * as React from 'react'
import { shallow, configure, mount } from 'enzyme';
import AppBar from "./AppBar.component";
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { Data } from "./MockData";

configure({ adapter: new Adapter() })

describe('', () => {


  test('renders correctly', () => {
    shallow(<AppBar BackButton={Data.backbuttonTrue} title={Data.title} />);
  });


  test('renders correctly', () => {
    const tree = renderer.create(<AppBar BackButton={Data.backbuttonTrue} title={Data.title} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});

