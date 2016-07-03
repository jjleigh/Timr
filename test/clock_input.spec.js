import { expect, sinon, React, shallow, mount } from './helpers/spec-helper.js';
import ClockInput from '../app/components/timr/clock_input.jsx';

describe('<ClockInput />', function(){
    describe('onKeyUp', function(){
        it('should trigger its callback function', function(){
            var update_time_callback = sinon.spy(); 
            const wrapper = mount(<ClockInput updateCallback={ update_time_callback } paused={ true } />);
            wrapper.find('input').first().simulate('keyup');
            expect(update_time_callback).calledOnce;
        });
    });

    describe('handleChange', function(){
        describe('when paused state is true', function(){
            it('it should change the value of the input', function(){
                const wrapper = mount(<ClockInput updateCallback="bob" paused={ true } />);
                wrapper.find('input').first().simulate('change', {target: {value: 5}});
                expect(wrapper.instance().state.minute).to.eq(5);
            });
        });


        describe('when paused state is false', function(){
            it('it should not change the value of the input', function(){
                const wrapper = mount(<ClockInput updateCallback="bob" paused={ false }/>);
                wrapper.instance().setState({second: 1});
                wrapper.find('input').last().simulate('change', {target: {value: 5}});
                expect(wrapper.instance().state.second).to.eq(1);
            });
        });
    });

    describe('filterChange', function(){
        describe('when input value is a number', function(){
            it('should update the minute or second state', function(){
                const wrapper = mount(<ClockInput updateCallback="bob" paused={ false }/>);
                var changeEvent = {target: {value: 5}}
                wrapper.instance().filterChange(changeEvent, 'minute');
                expect(wrapper.instance().state.minute).to.eq(5);
            });
        });

        describe('when input value is not a number', function(){
            it('should not update the minute or second state', function(){
                const wrapper = mount(<ClockInput updateCallback="bob" paused={ false }/>);
                var changeEvent = {target: {value: 'steve'}}
                wrapper.instance().filterChange(changeEvent, 'minute');
                expect(wrapper.instance().state.minute).to.not.eq('steve');
            });
        });
    });
});