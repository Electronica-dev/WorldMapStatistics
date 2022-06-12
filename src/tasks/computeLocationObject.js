import countryLocations from '../data/countryLocations.json';
import data from '../data/data.json'
import legendItems from '../entities/LegendItems';

const computeLocationObject = () => {

  let counts = data.reduce((totalMap, current) => {
    let count = totalMap.get(current.region) || 0
    totalMap.set(current.region, current.data + count)
    return totalMap
  }, new Map())

  let uniqueLocations = [...counts].map(([region, data]) => {
    return {region, data}
  })

  console.log(uniqueLocations);

  return uniqueLocations.map(function(d) {
    var result = countryLocations.countries.filter(c => c.alpha2 === d.region)

    const legendItem = legendItems.find((item) =>
      item.isFor(d.data)
    )

    result[0]['color'] = legendItem.color
    legendItem.noOfCountries += 1
    legendItem.totalNoOfCountries = counts.size

    result[0]['data'] = d.data

    return result[0]
  })

}

export default computeLocationObject;
