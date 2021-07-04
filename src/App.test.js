import App from './App';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

let root;

beforeAll(() => {
  root = mount(<App/>);
});

afterAll(() => {
  root = null;
});

describe('Check random color generation', () => {
  it('checks if random color is being generated', () => {
    let color_code='';
    let used_colors = [];
  
    while((color_code !== 7) || (color_code === 7 && used_colors.includes(color_code))) {
      color_code = '#bf2199';
      expect(root.instance().getRandomColor()).toBe('#bf2199');
    }
  
    expect(root.instance().used_colors).toBe(['#bf2199']);
    expect(root.instance().color_code).toBe('#bf2199');
  });
  
});
