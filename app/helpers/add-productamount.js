import Ember from 'ember';

export function addProductamount(params/*, hash*/) {
    let arg1 = params[0];
    let arg2 = params[1];
  return arg1 * arg2;
}

export default Ember.Helper.helper(addProductamount);
