/* eslint-env jest */
jest.disableAutomock();

import React, { View, Text, StyleSheet } from 'react-native'; // eslint-disable-line
import { shallow } from 'enzyme'; // eslint-disable-line

import { Foo } from '../foo'; // eslint-disable-line

describe('<Foo />', () => {
  it('renders <Text /> component', () => {
    const wrapper = shallow(<Foo />);
    expect(wrapper.find(Text).length).toEqual(1);
    expect(wrapper.contains(<Text>Welcome to React Native!</Text>)).toEqual(true);
  });
});
