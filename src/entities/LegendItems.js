import LegendItem from './LegendItem'

var legendItems = [
  new LegendItem(
    ">$5K",
    "#272d70",
    (usage) => usage >= 5_000
  ),

  new LegendItem(
    "$1K - $5K",
    "#001eff",
    (usage) => usage >= 1_000 && usage < 5_000
  ),

  new LegendItem(
    "$500 - $1K",
    "#009eff",
    (usage) => usage >= 500 && usage < 1_000
  ),

  new LegendItem(
    "<$500",
    "#00cdff",
    (usage) => usage < 500
  ),

];

export default legendItems;
