export const filterQuery = (obj) => {
  let keyArr = Object.keys(obj)
  let filters = {}
  keyArr.forEach(key => {
    if(obj[key]) filters[key] = obj[key]
  })
  return filters
}

