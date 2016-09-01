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

            it('should not allow input values greater than 99 for minutes', function() {
                const wrapper = mount(<ClockInput updateCallback="bob" paused={ false } />);
                var changeEvent = {target: {value: 100}}
                wrapper.instance().filterChange(changeEvent, 'minute');
                expect(wrapper.instance().state.minute).to.eq(60);
            });

            it('should not allow input values greater than 60 for seconds', function() {
                const wrapper = mount(<ClockInput updateCallback="bob" paused={ false } />);
                var changeEvent = {target: {value: 61}}
                wrapper.instance().filterChange(changeEvent, 'second');
                expect(wrapper.instance().state.second).to.eq(60);
            });

            it('should not allow input to show NaN when backspacing from a num value to empty value', function(){
                const wrapper = mount(<ClockInput updateCallback="bob" paused={ false } />);
                wrapper.instance().setState({second: 1});
                var changeEvent = {target: {value: ''}}
                wrapper.instance().filterChange(changeEvent, 'second');
                expect(wrapper.instance().state.second).to.eq('');
            });
        });

        describe('when input value is not a number', function(){
            describe('and it is an empty string', function(){
                it('should update the minute or second state', function(){
                    const wrapper = mount(<ClockInput updateCallback="bob" paused={ false }/>);
                    wrapper.instance().setState({minute: 10});
                    var changeEvent = {target: {value: ''}}
                    wrapper.instance().filterChange(changeEvent, 'minute');
                    expect(wrapper.instance().state.minute).to.eq(1);
                });

                it('should not update an empty input', function () {
                    const wrapper = mount(<ClockInput updateCallback="bob" paused={ false }/>);
                    wrapper.instance().setState({minute: ''});
                    var changeEvent = {target: {value: ''}}
                    wrapper.instance().filterChange(changeEvent, 'minute');
                    expect(wrapper.instance().state.minute).to.eq('');
                });
            });

            describe('and it is not an empty string', function(){
                it('should not update the minute or second state', function(){
                    const wrapper = mount(<ClockInput updateCallback="bob" paused={ false }/>);
                    var changeEvent = {target: {value: 'steve'}}
                    wrapper.instance().filterChange(changeEvent, 'minute');
                    expect(wrapper.instance().state.minute).to.not.eq('steve');
                });
            });
        });
    });
});