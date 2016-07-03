import { expect, sinon, React, shallow, mount } from './helpers/spec-helper.js';

import Timr from '../app/components/timr/timr.jsx';

describe('<Timr />', function () {
  
  describe('changePauseState', function(){
    describe('when pause is true', function(){
      it('should set the pause state to false', function(){
        let wrapper = mount(<Timr second={ 2 } minute={ 0 }/>);
        wrapper.instance().changePauseState();
        expect(wrapper.instance().state.paused).to.eq(false);
      });
    });

    describe('when pause is false', function(){
      it('should set the pause state to true', function(){
        const wrapper = mount(<Timr second={ 2 } minute={ 0 }/>);
        wrapper.instance().changePauseState();
        wrapper.instance().changePauseState();
        expect(wrapper.instance().state.paused).to.eq(true);
      });

      it('should trigger decrementSecond', function() {
        const wrapper = mount(<Timr second={ 20 } minute={ 0 }/>);
        let clock = sinon.useFakeTimers();
        wrapper.instance().changePauseState();
        clock.tick(1000);
        expect(wrapper.instance().state.second).to.eq(19);
        clock.restore();
      });

      it('should change the typing state to false', function(){
        const wrapper = mount(<Timr second={ 2 } minute={ 0 }/>);
        wrapper.instance().changeTypingState();
        wrapper.instance().changePauseState();
        expect(wrapper.instance().state.typing).to.eq(false);
      });
    });
  });

  describe('decrementSecond', function() {
    describe('when paused state is true', function() {
      it('should not change the second state', function(){
        const wrapper = mount(<Timr minute={ 1 } second={ 30 } />);
        wrapper.instance().decrementSecond();
        expect(wrapper.instance().state.second).to.eq(30);
      });
    });

    describe('when paused state is false', function() {
      describe('when the second is between 0 and 60', function() {
        it('should change the second state by one', function () {
          const wrapper = mount(<Timr minute={ 0 } second={ 58 } />);
          wrapper.instance().changePauseState();
          wrapper.instance().decrementSecond();
          expect(wrapper.instance().state.second).to.eq(57);
        });
      });

      describe('when the second is 0', function(){
        it('should reset to 59 and trigger the decrementMinute method', function () {
          const wrapper = mount(<Timr minute={ 2 } second={ 0 }/>);
          wrapper.instance().changePauseState();
          wrapper.instance().decrementSecond();
          expect(wrapper.instance().state.second).to.eq(59);
          expect(wrapper.instance().state.minute).to.eq(1);
        });
      });
    });
  });

  describe('decrementMinute', function(){
    describe('when paused state is true', function() {
      it('should not change the minute state', function(){
        const wrapper = mount(<Timr minute={ 1 } second={ 59 } />);
        wrapper.instance().decrementSecond()
        expect(wrapper.instance().state.minute).to.eq(1);
      });
    });

    describe('when paused state is false', function() {
      describe('when second greater than 0', function(){
        it('should not change the minute state by one', function () {
          const wrapper = mount(<Timr minute={ 1 } second={ 30 } />);
          wrapper.instance().changePauseState();
          wrapper.instance().decrementSecond()
          expect(wrapper.instance().state.minute).to.eq(1);
        });
      }); 

      describe('when second state is 0', function(){
        it('should change the minute state by 1', function() {
          const wrapper = mount(<Timr minute={ 2 } second={ 0 }/>);
          wrapper.instance().changePauseState();
          wrapper.instance().decrementSecond()
          expect(wrapper.instance().state.minute).to.eq(1);
        });
      });
    });
  });

  describe('updateTime', function() {
    describe('when paused state is true', function(){
      it('should update the minute and second state', function(){
        const wrapper = mount(<Timr minute={1} second={0}/>);
        var eventObj = {target: {name: 'second', value: 20}};
        wrapper.instance().updateTime(eventObj);
        expect(wrapper.instance().state.minute).to.eq(1);
        expect(wrapper.instance().state.second).to.eq(20);
      });
    });

    describe('when paused state is false', function(){
      it('should not update the minute and second state', function(){
        const wrapper = mount(<Timr minute={0} second={0}/>);
        wrapper.instance().changePauseState();
        var eventObj = {target: {name: 'minute', value: 20}};
        wrapper.instance().updateTime(eventObj);
        expect(wrapper.instance().state.minute).to.eq(0);
        expect(wrapper.instance().state.second).to.eq(0);
      });
    });
  });

  describe('changeTypingState', function() {
    describe('when paused state is true', function(){
      it('should change the typing state', function(){
        const wrapper = mount(<Timr minute={0} second={0}/>);
        wrapper.instance().changeTypingState();
        expect(wrapper.instance().state.typing).to.eq(true);
      });
    });

    describe('when paused state is false', function(){
      it('should not change the typing state', function(){
        const wrapper = mount(<Timr minute={0} second={0}/>);
        wrapper.instance().changePauseState();
        wrapper.instance().changeTypingState();
        expect(wrapper.instance().state.typing).to.eq(false);
      });
    });
  });
});










