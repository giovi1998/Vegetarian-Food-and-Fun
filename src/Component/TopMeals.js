import Title from "./Title";
import chineseMealPhoto from "../images/chineseFood.jpg"
import italianMealPhoto from "../images/italianFood.jpg"
import americanPhoto from "../images/americanFood.jpg"
import "../styles/FeaturedMeals.css"
const FeaturedMeals = () => {

  return (
    <section className='featured-meals'>
        <Title title="Top Meals" />
        <div className='featured-meals-center'>
          <div className='img-container'>
                  <img src={italianMealPhoto} alt='Meal'/>
                      {/* <Link to={`/singleroom/${slug}`} 
                          className="btn-primary room-link">
                          Our rooms
                      </Link>    */}
                  <p className="meal-info"> Italian Food</p>
          </div>
          <div className='img-container'>
                  <img src={chineseMealPhoto} alt='Meal'/>
                      {/* <Link to={`/singleroom/${slug}`} 
                          className="btn-primary room-link">
                          Our rooms
                      </Link>    */}
                  <p className="meal-info"> Chinese Food</p>
          </div>
          <div className='img-container'>
                  <img src={americanPhoto} alt='Meal'/>
                      {/* <Link to={`/singleroom/${slug}`} 
                          className="btn-primary room-link">
                          Our rooms
                      </Link>    */}
                  <p className="meal-info">American food</p>
          </div>

       </div>                 
    </section>
  )
}

export default FeaturedMeals
