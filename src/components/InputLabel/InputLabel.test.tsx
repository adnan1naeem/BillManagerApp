import * as React from 'react'
import InputLabel from "./InputLabel.component";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { Data } from "./MockData";

// it('renders without crashing', () => {
//   const rendered = renderer.create(<App />).toJSON()
//   expect(rendered).toMatchSnapshot()
//   expect(rendered).toBeTruthy()
// })
//configure({ adapter: new ReactSixteenAdapter() })


configure({ adapter: new Adapter() })

describe('', () => {


  test('rens correctly', () => {
    shallow(<InputLabel
      label={Data.label}
      onChangeText={Data.onValueChange}
    />);
  });


  test('renders correctly', () => {
    const tree = renderer.create(<InputLabel
      label={Data.label}
      onChangeText={Data.onValueChange}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});





// describe('FormPicker Testcases', () => {

//   it('should render component', () => {
//     expect(<InputLabel
//       label={Data.label}
//       Items={Data.Items}
//       handleChange={Data.onValueChange}
//     />
//     ).toBeTruthy();
//   });
// });

// describe('FormPicker prop are missing Testcases', () => {

//   it('should throw error as required prop Items is missing', () => {
//     let error
//     try {
//       shallow(<InputLabel
//         label={Data.label}
//         handleChange={Data.onValueChange}
//       />)
//     } catch (e) {
//       error = e
//     }
//     expect(error).toBeDefined()
//   });


//   it('should throw error as required prop handleChange is missing', () => {
//     let error
//     try {
//       shallow(<InputLabel
//         label={Data.label}
//         Items={Data.Items}

//       />)
//     } catch (e) {
//       error = e
//     }
//     expect(error).toBeDefined()
//   });

//   it('should throw error as required prop label is missing', () => {
//     let error
//     try {
//       shallow(<InputLabel
//         Items={Data.Items}
//         handleChange={Data.onValueChange}
//       />)
//     } catch (e) {
//       error = e
//     }
//     expect(error).toBeDefined()
//   });
// });


// describe('FormPicker prop are null Testcases', () => {

//   it('should throw error as required prop label is null', () => {
//     let error
//     try {
//       shallow(
//         <InputLabel
//           Items={Data.Items}
//           handleChange={Data.onValueChange}
//           label={null}
//         />
//       )
//     } catch (e) {
//       error = e
//     }
//     expect(error).toBeDefined()
//   });



//   it('should throw error as required prop Items is null', () => {
//     let error
//     try {
//       shallow(
//         <InputLabel
//           Items={null}
//           handleChange={Data.onValueChange}
//           label={Data.label}
//         />
//       )
//     } catch (e) {
//       error = e
//     }
//     expect(error).toBeDefined()
//   });
// });

// describe('FormPicker prop are undefined Testcases', () => {


//   it('should throw error as required prop Items are undefined', () => {
//     let error
//     try {
//       shallow(
//         <InputLabel
//           Items={undefined}
//           handleChange={Data.onValueChange}
//           label={Data.label}
//         />
//       )
//     } catch (e) {
//       error = e
//     }
//     expect(error).toBeDefined()
//   });


// });