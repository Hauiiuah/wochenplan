import {useEffect, useState} from "react";

const ShoppingList = ({menus})=>{

    const [shoppingList,setShoppingList] = useState({})


    useEffect(() => {
        console.log('New Shoppinglist generated')

        let ingredients=menus.filter(menu => menu).flatMap(menu => menu.ingredients)
        let localShoppingList ={}
        ingredients.forEach(ing => {
            if(Object.hasOwn(localShoppingList,ing.name)){
                localShoppingList[ing.name].amount+=ing.amount
            }else
            {
                localShoppingList[ing.name] ={amount: ing.amount,unit: ing.unit}
            }
        })
        setShoppingList(localShoppingList)


    },[menus])
    return (
        <div className="shoppinglist">
            <h4>Einkaufsliste</h4>
            <hr/>
            <ul>
                {Object.keys(shoppingList).map(key =><li key={key}>{`${shoppingList[key].amount} ${shoppingList[key].unit} ${key}`}</li>)}
            </ul>
        </div>
    )
}

export default ShoppingList