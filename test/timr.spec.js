import { expect, sinon, React, shallow, mount } from './helpers/spec-helper.js';

import Timr from '../app/components/timr';

describe('<Timr />', function () {

  // describe('Render', function(){
  //   it('should render with', function () {
  //     const wrapper = mount(<Timr />);
  //     expect(wrapper.find('#timr').length).to.eq(1);
  //   });
  // });

  describe('changePauseState', function(){
    describe('when pause is true', function(){
      it('should set the pause state to false', function(){
        const wrapper = mount(<Timr />);
        wrapper.instance().changePauseState();
        expect(wrapper.instance().state.paused).to.eq(false);
      });
    });

    describe('when pause is false', function(){
      it('should set the pause state to true', function(){
        const wrapper = mount(<Timr />);
        wrapper.instance().changePauseState();
        wrapper.instance().changePauseState();
        expect(wrapper.instance().state.paused).to.eq(true);
      });
    });
  });

  describe('incrementMinute', function(){
    describe('when second state is less than 59 or less', function(){
      it('should not change the minute state by one', function () {
        const wrapper = shallow(<Timr minute={ 1 } second={ 30 } />);
        console.log(wrapper.instance().state)
        wrapper.instance().incrementMinute()
        expect(wrapper.instance().state.minute).to.eq(1);
      });
    });

    describe('when second state is reset to 0', function(){
      it('should change the minute state by 1', function() {
        const wrapper = shallow(<Timr minute={ 1 } second={ 0 }/>);
        wrapper.instance().incrementMinute()
        expect(wrapper.instance().state.minute).to.eq(2);
      });
    })
    
  });

  describe('IncrementSecond', function(){
    describe('when the second 58 or less', function() {
      it('should change the second state by one', function () {
        const wrapper = shallow(<Timr minute={ 0 } second={ 58 } />);
        wrapper.instance().incrementSecond();
        expect(wrapper.instance().state.second).to.eq(59);
      });
    });

    describe('when the secind is 59', function(){
      it('should reset to 0', function () {
        const wrapper = shallow(<Timr minute={ 1 } second={ 59 }/>);
        wrapper.instance().incrementSecond();
        expect(wrapper.instance().state.second).to.eq(0);
      });
    });
  });


  // describe('AddNewTimr', function(){
  //   it('should added a new timer to the page', function () {
  //     const wrapper = shallow(<Timr />);
  //     expect(wrapper.find('#timr')).to.have.length(2);
  //   });
  // });
});