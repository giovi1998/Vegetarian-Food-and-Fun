import React, { useEffect , useState} from 'react';
import axios from 'axios';
import Loading from './Loading.js';
import '../styles/FeaturedMeals.css'


function MealList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
      const dataFetch = async () => {
        let data = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=1eb2683e66424534ad3a3624227fd050&number=3&diet=vegan&cuisine=Chinesese');
        let arrayRecipes=data.data.results;
        let offset=data.data.offset;
        let number=data.data.number;
        let totalResults=data.data.totalResults;
        console.log(data);
        console.log(arrayRecipes);
        console.log(offset);
        console.log(number);
        console.log(totalResults);
        setRecipes({arrayRecipes:arrayRecipes,
          offset:offset,
          number:number,
          totalResults:totalResults,
          isLoading:true
        });
    };
  
      dataFetch();
    }, []);
  // {"results":[{
  //     "id":782585,
  //     "title":"Cannellini Bean and Asparagus Salad with Mushrooms",
  //     "image":"https://spoonacular.com/recipeImages/782585-312x231.jpg",
  //     "imageType":"jpg"
  //   }],
  //   "offset":0,
  //   "number":1,
  //   "totalResults":689
  // }
    console.log(recipes);
    return (
      <>
      {recipes.isLoading ? recipes.arrayRecipes.map((item) => {
         return (
          <article className='meal'>
            <div className='featured-meals-center'>
                  <div className='img-container'>
                  <img src={item.image} alt='Meal'/>
                  {/* <Link to={`/singleroom/${slug}`} 
                    className="btn-primary room-link">
                    Our rooms
                  </Link>    */}
                  <p className="meal-info"> {item.title}</p>
                </div>

            </div>
          
          
          </article>
         )
      }): <Loading />}
      </>
  );

}

export default MealList
