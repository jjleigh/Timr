import { expect, sinon, React, shallow, mount } from './helpers/spec-helper.js';

import Timr from '../app/components/timr/timr.jsx';

describe('<Timr />', function () {
  
  describe('changePauseState', function(){
    describe('when pause is true', function(){
      // it('should set the pause state to false', function(){
      //   const wrapper = mount(<Timr second={ 2 } minute={ 0 }/>);
      //   wrapper.instance().changePauseState();
      //   expect(wrapper.instance().state.paused).to.eq(false);
      // });
    });

    describe('when pause is false', function(){
      // it('should set the pause state to true', function(){
      //   const wrapper = mount(<Timr second={ 2 } minute={ 0 }/>);
      //   wrapper.instance().changePauseState();
      //   wrapper.instance().changePauseState();
      //   expect(wrapper.instance().state.paused).to.eq(true);
      // });

      // it('should trigger decrementSecond', function() {
      //   const wrapper = mount(<Timr second={ 20 } minute={ 0 }/>);
      //   let clock = sinon.useFakeTimers();
      //   wrapper.instance().changePauseState();
      //   clock.tick(1000);
      //   expect(wrapper.instance().state.second).to.eq(19);
      //   clock.restore();
      // });
    });
  });
  describe('decrementSeconds', function() {

  });
});