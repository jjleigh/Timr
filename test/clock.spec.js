import { expect, sinon, React, shallow, mount } from './helpers/spec-helper.js';
import Clock from '../app/components/timr/clock.jsx'

describe('<Clock />', function(){
  describe('onClick', function() {

    var tCallback;
    var pauseCallback;
    var testProps;
    var wrapper;

    beforeEach(function(){
      tCallback = sinon.spy();
      pauseCallback = sinon.spy();
      testProps = { second: 0, minute: 0, typingCallback: tCallback, paused: true, pauseCallback: pauseCallback}
      wrapper = mount(<Clock { ...testProps }/>);
    });

    describe('the minute input and second input container', function(){
      it('should trigger the typing state callback', function(){
        wrapper.find('.min-container').simulate('click');
        expect(tCallback).calledOnce;
      });
    });

    describe('the pause and play icons', function(){
      it('should trigger the pause state callback', function(){
        wrapper.find('.icons').first().simulate('click');
        expect(pauseCallback).calledOnce;
      });
    });
  });
});