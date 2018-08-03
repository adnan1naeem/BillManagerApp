import * as React from 'react'
import { shallow, configure, mount } from 'enzyme';
import AppBar from "./AppBar.component";
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';


configure({ adapter: new Adapter() })

test('renders correctly', () => {
  shallow(<AppBar title="ssss" />);
});

test('AppBar should not render if title prop is missing', () => {
  shallow(<AppBar title="" />);
});

test('AppBar should not render if title prop is undefined', () => {
  shallow(<AppBar title={undefined} />);
});


test('renders correctly', () => {
  const tree = renderer.create(<AppBar title="ssss" />).toJSON();
  expect(tree).toMatchSnapshot();
});



