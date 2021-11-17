import React from 'react';

const RecipeCard = ({
  // info, openModal
}) => {
  // const { strMeal, 
    
  // } = info;

  // const openDetailsModal = (e, type, id) => {
  //   const top = e.pageY;
  //   const left = e.pageX;
  //   openModal(type, { top, left }, id);
  // };

  return (
    <div>
      <h3>I am a recipe Card</h3>
    <article className="card charCard">
      <div className="charHeadContainer">
        <h3 className="mealName">MealName</h3>
      </div>
        <li className="charDetail">Recipe: link</li>

        {/* <li className="charDetail">Homeworld: {homeworld} <span className="icon"><FAIcon icon={faQuestionCircle} size="xs" style={{color: 'steelBlue'}} onClick={e => openDetailsModal(e, 'homeworld', homeworld_id)} /></span></li>> */}
    </article>
    <section>
    <h3>I am a measurements section</h3>
    </section>    
    </div>
  );
};

export default RecipeCard;