import {useEffect, useState} from "react";
import {RecipeProvider} from "../services";

const RecipeSelector = ({selectRecipeCallback}) => {
    const [recipes,setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe]= useState(null)
    const [searchFilter,setSearchFilter]= useState("")

    useEffect(()=>{(async ()=>{
        const recipes = await RecipeProvider.getAll()
        setRecipes(recipes)
    })()},[])


    const localSelectRecipe=(recipe)=>{
        selectRecipeCallback(recipe)
        setSelectedRecipe(recipe)
    }

    const recipeFilter=(recipe)=>{

        return recipe.name.toLowerCase().includes(searchFilter.toLowerCase())
    }

    return (
        <>
            <div className="searchbar">
                <input type="text" placeholder="Suche" onChange={(e)=>setSearchFilter(e.target.value)} value={searchFilter} />
            </div>
        <div className="selectList">
            <ul>
                {recipes.filter(recipeFilter).map( (recipe) =>
                    {
                        const isSelected = selectedRecipe?._id === recipe._id ? "selected" : ""
                        return (
                            <li key={recipe._id} className={isSelected} onClick={()=>{localSelectRecipe(recipe)}}>
                                <img src={`./assets/recipes/${recipe.img}`} alt={recipe.name} className="menu-img" /> <p>{recipe.name}</p>
                            </li>
                        )
                    }

                )}
            </ul>
        </div>
        </>
    )
}

export default RecipeSelector