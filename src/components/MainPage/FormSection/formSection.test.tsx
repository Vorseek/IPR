import React from 'react';
import { shallow } from 'enzyme';
import FormSection from '.';

describe('Form Section render', () => {
  it('render button submit isReady', () => {
    const nextProps = { isReady: true };
    const formSectionShallow = shallow(<FormSection {...nextProps} />);
    expect(formSectionShallow.find('button').text()).toEqual('Yes Ready');
  });

  it('render button submit is not ready', () => {
    const nextProps = { isReady: false };
    const formSectionShallow = shallow(<FormSection {...nextProps} />);

    expect(formSectionShallow.find('button').length).toBe(0);
  });
});
