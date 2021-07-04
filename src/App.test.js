import App from './App';
import { mount } from 'enzyme';

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
    let count=0;

    while(count < 5) {
      color_code = root.instance().getRandomColor();
    count++;
    }
    used_colors.push(color_code);

    // add function to check that array is unique.
    const isArrayUnique = arr => Array.isArray(arr) && new Set(arr).size === arr.length; 
    expect(isArrayUnique(used_colors)).toBeTruthy();
  });
  
});

describe('App test suite', () => {
  it('Component did mount', () => {
    setInterval(() => {
        root.instance().componentDidMount();
        expect(root.instance().getRandomColor()).toHaveBeenCalled();
        expect(root.state().currentTime).toBe(new Date().toString());
    }, 1000);
  });

  it('Component Will Unmount', () => {
    root.instance().componentWillUnmount();
    expect(root.instance().interval).toBe(null);
  });

  it('Cleans up intervals', () => {
    root.instance().interval = 1000;
    root.instance().clearIntervals();
    expect(root.instance().interval).toBe(null);
});

});