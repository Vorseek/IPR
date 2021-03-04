// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// @ts-ignore
global.shallow = shallow;
// @ts-ignore
global.render = render;
// @ts-ignore
global.mount = mount;

console.error = (message: any) => {
  throw new Error(message);
};
