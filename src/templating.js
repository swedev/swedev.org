import {
  flatten,
} from './utils';

/**
 * jsx create object function
 */
export function jsxCreateObject(type, props, ...children) {
  // If children in props instead
  if (!(children && children.length) && props && props.children) {
    children = Array.isArray(props.children) ? flatten(props.children) : [props.children];
    delete props.children;
  }
  // If type is function
  if (typeof type === 'function') {
    const childrenObj = children.length ? { children: children.slice() } : {};
    return type({ ...props, ...childrenObj });
  }
  // Default return simple object
  return { type, props, children };
}

/**
 * recursiveRenderHtml
 */
export function recursiveRenderHtml(obj) {
  if (typeof obj === 'string') {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj
      .filter(c => typeof c !== 'undefined')
      .map(c => recursiveRenderHtml(c))
      .join('');
  }
  const { type, props, children } = obj;
  // Joint attribute string
  const attrsString = props
    ? Object.keys(props)
      .map(key => ` ${(key === 'className' ? 'class' : key)}="${props[key]}"`)
      .join('')
    : '';
  // Return string
  return `<${type}${attrsString}>${recursiveRenderHtml(children)}</${type}>`;
}
