const queryMDBfilter = "https://www.themealdb.com/api/json/v2/9973533/filter.php?i=";//comma separated
const queryMDBrecipe = "https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=";

const diveController = {};

// diveController.getRecipes('/', async (req, res, next) => {
//   const { ing } = req.params;
//   const result = await(fetch(queryMDB+ing));
//   if (err) return(next(err));
//   const ingObj = {};
//   ingObj.ing = []; //ing for each when more than one
//   ingObj = res.locals.ings
// })

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