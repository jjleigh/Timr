import { expect, sinon, React, shallow, mount } from './helpers/spec-helper.js';
import ClockInput from '../app/components/timr/clock_input.jsx';

describe('<ClockInput />', function(){
    describe('onKeyUp', function(){
        it('should trigger its callback function', function(){
            var update_time_callback = sinon.spy(); 
            const wrapper = mount(<ClockInput pauseCallback={ update_time_callback } paused={ true } />);
            wrapper.find('input').first().simulate('keyup');
            expect(update_time_callback).calledOnce;
        });
    });

    describe('handleChange', function(){
        describe('when paused state is true', function(){
            it('it should change the value of the input', function(){
                const wrapper = mount(<ClockInput pauseCallback="bob" paused={ true } />);
                wrapper.find('input').first().simulate('change', {target: {value: 5}});
                expect(wrapper.instance().state.minute).to.eq(5);
            });
        });


        describe('when paused state is false', function(){
            it('it should not change the value of the input', function(){
                const wrapper = mount(<ClockInput pauseCallback="bob" paused={ false }/>);
                wrapper.instance().setState({second: 1});
                wrapper.find('input').last().simulate('change', {target: {value: 5}});
                expect(wrapper.instance().state.second).to.eq(1);
            });
        });
    });
});