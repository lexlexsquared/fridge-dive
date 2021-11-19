const queryMDBfilter = "https://www.themealdb.com/api/json/v2/9973533/filter.php?i=";//comma separated
const queryMDBrecipe = "https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=";

const diveController = {};

diveController.getRecipes = async (req, res, next) => {
  try{
    const ing = req.query;
  const result = await(fetch(queryMDBfilter+ing));
  console.log(result);

  return next()}
  catch(err){
    return next(console.log(err))

  }
}

// diveController.viewRecipe('', async(req, res, next) => {
//   if (err) return(next(err));
//   const { mealID } = req.body;
//   const result = await(fetch(queryMDB+mealID))
//   result = res.locals.detail
// })

// diveController.diveIn('/diveIn', async (req, res, next) => {
//   if (err) return(next(err));
//   //take in fav Icon
//   //for each recipe, if recipe === plan, assign to ingObj[ing] = measurement(user input)
  
//   plan = res.locals.plan; 
// })

module.exports = diveController;