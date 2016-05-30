import { expect, sinon, React, shallow, mount } from './helpers/spec-helper.js';

import Timr from '../app/components/timr';

describe('<Timr />', function () {

  describe('Render', function(){
    it('should render with', function () {
      const wrapper = shallow(<Timr />);
      expect(wrapper.find('#timr')).to.have.length(1);
    });
  });

  describe('IncrementMinute', function(){
    it('should change the minute state by one', function () {
      const wrapper = shallow(<Timr />);
      expect(wrapper.find('#timr')).to.have.length(1);
    });
  });

  describe('IncrementSecond', function(){
    it('should change the second state by one', function () {
      const wrapper = shallow(<Timr />);
      expect(wrapper.find('#timr')).to.have.length(1);
    });
  });


  describe('AddNewTimr', function(){
    it('should added a new timer to the page', function () {
      const wrapper = shallow(<Timr />);
      expect(wrapper.find('#timr')).to.have.length(2);
    });
  });
});