 import * as React from 'react'
// import { shallow,configure } from 'enzyme';
 import AppBar from  "./AppBar.component";
// import ReactSixteenAdapter from 'enzyme-adapter-react-16';

// // it('renders without crashing', () => {
// //   const rendered = renderer.create(<App />).toJSON()
// //   expect(rendered).toMatchSnapshot()
// //   expect(rendered).toBeTruthy()
// // })
// //configure({ adapter: new ReactSixteenAdapter() })


// describe('AppBar Testcases', () => {
  
//   it('should render component', () => {
//    expect(<AppBar BackButton={true}  title="ADNAN"  />).toBeTruthy();
//   });
  
//   it('should throw error as required prop title is missing', () => {
//     let error
//     try {
//       shallow(<AppBar BackButton={true}  />)
//     } catch (e) {
//       error = e
//     }
//     expect(error).toBeDefined()
//   });


//     it('should throw error as required prop title is null', () => {
//     let error
//     try {
//       shallow(<AppBar title={null}  />)
//     } catch (e) {
//       error = e
//     }
//     expect(error).toBeDefined()
//   });


//   it('should throw error as required prop title is undefined', () => {
//     let error
//     try {
//       shallow(<AppBar title={undefined}  />)
//     } catch (e) {
//       error = e
//     }
//     expect(error).toBeDefined()
//   });
// });



import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<AppBar BackButton={true}  title="ADNAN"  />).toJSON();
  expect(tree).toMatchSnapshot();
});