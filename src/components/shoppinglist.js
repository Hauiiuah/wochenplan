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

            <table>
                <tbody>
                {Object.keys(shoppingList).sort().map(key =>
                    <tr key={key} >
                        <td width="1%"><strong>{shoppingList[key].amount}</strong></td>
                        <td width="1%">{shoppingList[key].unit}</td>
                        <td width="98%">{key}</td>
                    </tr>)}
                </tbody>
            </table>


        </div>
    )
}


export default ShoppingList