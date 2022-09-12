import {useEffect, useState} from "react";
import {RecipeProvider} from "../services";

const RecipeSelector = ({selectRecipeCallback}) => {
    const [recipes,setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe]= useState(null)

    useEffect(()=>{(async ()=>{
        const recipes = await RecipeProvider.getAll()
        setRecipes(recipes)
    })()},[])


    const localSelectRecipe=(recipe)=>{
        console.log('localSelectRecipe')
        selectRecipeCallback(recipe)
        setSelectedRecipe(recipe)
    }

    return (
        <div className="selectList">
            <ul>
                {recipes.map( (recipe) =>
                    {
                        const isSelected = selectedRecipe?._id === recipe._id ? "selected" : ""
                        return (<li key={recipe._id} className={isSelected} onClick={()=>{localSelectRecipe(recipe)}}>{recipe.name}</li>)
                    }

                )}
            </ul>
        </div>
    )
}

export default RecipeSelector