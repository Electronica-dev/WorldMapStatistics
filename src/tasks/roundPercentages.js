var _ = require('lodash')

function roundPercentages(l, target) {
  var off = target - _.reduce(l, function(acc, x) { return acc + Math.round(x) }, 0);
  let lastButOneSubstraction = false;
  return _.chain(l).
    map(function(x, i) {
      let lastSubstraction =  (i >= (l.length + off)) && !lastButOneSubstraction;
      lastButOneSubstraction = (l[i+1] == 0 && i+1 >= (l.length + off) && !(i >= (l.length + off)));
      return Math.round(x) + (off > i) - (lastSubstraction || lastButOneSubstraction)
    }).
    value();
}

export default roundPercentages