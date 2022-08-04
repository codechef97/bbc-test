import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import DisplayImage from './components/DisplayImage';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('My component', () => {
  test('should render DisplayImage Component', () => {
      const { getByRole, getByTestId } = render(<Component/>);

      const root = getByRole('root');
      const container = getByTestId('container');
      const list = getByTestId('list');
      const image = getByTestId('image');

      expect(root).toContainElement(container);
      expect(container).toContainElement(list);
      expect(container).toContainElement(image); // Pass

      expect(list).not.toContainElement(container); // Pass
      expect(list).toContainElement(container); // Throw error!    
  });
});

it('has DisplayImage Component Rendered', () => {
  const wrapper = shallow(<App />);
  const header = wrapper.find('DisplayImage');
  expect(<DisplayImage />).toEqual(header);
});

it('has the correct image properties', () => {
  const wrapper = shallow(<App />);
  const image = wrapper.find('.primary-image');
  expect(image.props().src).toEqual('/images/p53hfsg.jpg');
  expect(image.props().alt).toEqual('this is a animal critter');
});
