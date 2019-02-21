import checkPropTypes from 'check-prop-types';

export const findByAttr = (wrapper, name) => {
    return wrapper.find(`[data-test='${name}']`);
}

export const checkTypes = (component, props) => {
    return checkPropTypes(component.propTypes, props, 'prop', component.name);
}
