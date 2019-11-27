import * as React from 'react'
import { shallow, configure, mount } from 'enzyme';
import Home from "./Home";
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { withRouter } from 'react-router-native';


configure({ adapter: new Adapter() })




test('renders correctly', () => {
  const tree = renderer.create(withRouter(Home)).toJSON();
  expect(tree).toMatchSnapshot();
});



