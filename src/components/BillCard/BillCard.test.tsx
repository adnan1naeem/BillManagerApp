import * as React from 'react'
import { shallow, configure, mount } from 'enzyme';
import BillCard from "./BillCard.component";
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';


configure({ adapter: new Adapter() })

describe('', () => {


  test('renders correctly', () => {
    shallow(<BillCard budget={234} month="January" name="Okay Budget" />);
  });


  test('renders correctly', () => {
    const tree = renderer.create(<BillCard budget={234} month="January" name="Okay Budget" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});

