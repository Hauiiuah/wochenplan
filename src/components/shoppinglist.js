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
            <h3>Einkaufsliste</h3>
            <hr/>
            <ul>
                {Object.keys(shoppingList).map(key =><li key={key}><strong>{shoppingList[key].amount}</strong> {shoppingList[key].unit} {key}</li>)}
            </ul>
        </div>
    )
}

const ShoppingListTable = ({menus})=>{

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
            <h3>Einkaufsliste</h3>

            <table>

                {Object.keys(shoppingList).map(key =>
                    <tr key={key} >
                        <td width="1%"><strong>{shoppingList[key].amount}</strong></td>
                        <td width="1%">{shoppingList[key].unit}</td>
                        <td width="98%">{key}</td>
                    </tr>)}
            </table>


        </div>
    )
}

const exports ={ShoppingList, ShoppingListTable}
export default exports