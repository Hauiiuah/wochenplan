const express = require('express')
const router = express.Router()
const Menu = require ('../schema/menus')

router.get('/:year/:week', async (req,res)=>{
    const {year,week} =req.params
    const menu = await Menu.findOne({week:  `${year}#${week}`})
    res.json(menu)
})

router.post('/', async(req,res)=>{
    const menuDTO = {
        week:'2022#36',
        meals:[
            {
                name:"Hähnchen unter Senfbrösel-Haube",
                cals:695,
                duration: 35,
                img:'menu-bg.png',
                ingredients:[{
                    name:'Rice',
                    amount: 200,
                    unit: 'gr'
                },{
                    name: "Chicken",
                    amount: 2,
                    unit: 'stk'
                }

                ]
            }
        ]
    }
    const newMenu = new Menu(menuDTO)
    try{
        await newMenu.save()
        res.status(200).json(newMenu)
    }
    catch(e){
        console.log('Error',e)
        res.status(400).json({message:'Duplicate week',error: e})
    }
})

router.put('/:year/:week',async(req,res) => {


    const {year,week} = req.params
    const {menu} = req.body

    const result =await Menu.findOneAndUpdate({week: `${year}#${week}`},{meals: menu},{upsert:true,new:true})

    res.status(200).json(result)
})

module.exports = router