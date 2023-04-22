import { useState } from "react";
import Income from 'components/Income';
import IncomeForm from "components/IncomeForm";
import DiagrammaIncome from "components/DiagrammaIncome";
import { Link } from "react-router-dom"
import FilterIncomes from "components/FilterIncomes";



const IncomePage = () => {

    const [incomes, setIncomes] = useState([
        {
            id: 1,
            category: "Заработная плата",
            data: new Date(2023, 1, 27),
            cost: 132160
        },
        {
            id: 2,
            category: "Фриланс",
            data: new Date(2023, 2, 11),
            cost: 31000
        },
        {
            id: 3,
            category: "Инвестиции",
            data: new Date(2022, 2, 12),
            cost: 27300
        }
    ])

    const deleteCostsIncome = (id) => {
        const filteredCosts = incomes.filter(income => income.id !== id) //логика от обратного - покажем массив без того продукта, который удалили
        setIncomes(filteredCosts) //обновляем наше состояние - передаем наш отфильтрованный массив. setIncomes и придуман именно для того, чтобы мы в него могли передавать переделанный массив
    }

    //...incomes это копирование текущего массива + добавляем новый элемент массива income

    const addIncome = (income) => { 
        setIncomes([income, ...incomes]) 
        setFiltered([income, ...incomes])
    }

    const categories = ['Заработная плата', 'Фриланс', 'Преподавание', 'Инвестиции', 'Прочие доходы']

    const data = [
        { name: "Заработная плата", cost: incomes.filter(income => income.category === "Заработная плата").reduce((acc, income) => acc + Number(income.cost), 0 ) },
        { name: "Фриланс", cost: incomes.filter(income => income.category === "Фриланс").reduce((acc, income) => acc + Number(income.cost), 0 ) },
        { name: "Преподавание", cost: incomes.filter(income => income.category === "Преподавание").reduce((acc, income) => acc + Number(income.cost), 0 ) },
        { name: "Инвестиции", cost: incomes.filter(income => income.category === "Инвестиции").reduce((acc, income) => acc + Number(income.cost), 0 ) },
        { name: "Прочие доходы", cost: incomes.filter(income => income.category === "Прочие доходы").reduce((acc, income) => acc + Number(income.cost), 0 ) },
        ]

    const [filtered, setFiltered] = useState(incomes) 

    const filterCategory = (category) => {
        if (category === "Все доходы") {
            setFiltered(incomes)
        } else {
            let newIncomes = [...incomes].filter(income => income.category === category)
            setFiltered(newIncomes)
        }
            
        return filtered
    }
    

    return (

        <div className="bg-slate-100">

                <div className="max-w-screen-lg mx-auto px-6 md:px-10 py-16 text-center text-amber-600">
                    <Link to={'/'} className="hover:underline text-slate-500 font-semibold text-sm flex justify-left">Назад</Link>
                    <h1 className="text-black font-bold text-4xl items-center mb-4">Доходы</h1>
                    <div class="underline h-0.5 w-200 bg-amber-300 mr-auto ml-auto mb-12"></div>

                    <div className="flex"> 

                        <div className="flex">
                            <DiagrammaIncome data={data} />
                        </div>
                               
                        <div className="flex flex-col mt-10">

                            {categories.map(category => (
                                <div className="flex space-x-3.5">
                                    <p className="text-lg text-slate-500 ">{category}</p>
                                    <p className="text-lg text-slate-500 font-bold"> {new Intl.NumberFormat('ru-RU').format(incomes.filter(income => income.category === category).reduce((acc, income) => acc + Number(income.cost), 0 ))} руб.</p>
                                </div>
                            
                            ))}
                        </div>
                    </div>   

                    <div> 
                        <div className="text-stone-600 text-lg md:text-xl">
                            <div className="bg-slate-200 text-amber-400 font-semibold rounded px-6 py-2 mb-12 flex justify-between mx-12">
                                Всего: <span className="text-slate-500">{new Intl.NumberFormat('ru-RU').format(incomes.reduce((acc, income) => acc + Number(income.cost), 0))} руб</span>
                            </div>
                        </div>
                    </div>
                    
                    <IncomeForm addIncome={addIncome} />                 
                    <FilterIncomes filterCategory={filterCategory} />  

                    {incomes.length === 0 && ( 
                    <div className="mt-20 text-center text-3xl text-slate-500 font-bold">У вас пока нет доходов<br/><span className="mt-10 text-center text-base text-slate-500 font-normal">Заполните форму для добавления доходов</span></div>
                    )}

                    {filtered.length > 0 && filtered.reverse().map((income) => {
                        return (
                            <Income key={income.id} income={income} deleteCostsIncome={deleteCostsIncome} />
                        )
                    })}

                </div>
        </div>
    )
}

export default IncomePage

