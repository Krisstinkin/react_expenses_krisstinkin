import { useState } from "react";
import Expense from 'components/Expense';
import Form from "components/Form";
import Diagram from "components/Diagram";
import { Link } from "react-router-dom"

const ExpensesPage = () => {

    const [expenses, setExpenses] = useState([
        {
            id: 1,
            category: "Еда",
            data: new Date(2023, 1, 27),
            cost: 3216
        },
        {
            id: 2,
            category: "Связь",
            data: new Date(2023, 2, 11),
            cost: 310
        },
        {
            id: 3,
            category: "Транспорт",
            data: new Date(2022, 2, 12),
            cost: 2730
        }
    ])

    const deleteCosts = (id) => {
        const filteredCosts = expenses.filter(expense => expense.id !== id) //логика от обратного - покажем массив без того продукта, который удалили
        setExpenses(filteredCosts) //обновляем наше состояние - передаем наш отфильтрованный массив. setExpenses и придуман именно для того, чтобы мы в него могли передавать переделанный массив
     }
    
    const categories = ['Еда', 'Связь', 'Транспорт', 'Красота', 'Образование', 'Коммунальные платежи', 'Ипотека', 'Прочие расходы']

    const addExpense = (expense) => { // передаем эту функцию в тег формы как свойство
        setExpenses([expense, ...expenses]) //копируем всё текущее в новый массив и добавляем еще один элемент массива
    }

    const data = [
        { name: "Еда", cost: expenses.filter(expense => expense.category === "Еда").reduce((acc, expense) => acc + Number(expense.cost), 0 ) },
        { name: "Связь", cost: expenses.filter(expense => expense.category === "Связь").reduce((acc, expense) => acc + Number(expense.cost), 0 ) },
        { name: "Транспорт", cost: expenses.filter(expense => expense.category === "Транспорт").reduce((acc, expense) => acc + Number(expense.cost), 0 ) },
        { name: "Красота", cost: expenses.filter(expense => expense.category === "Красота").reduce((acc, expense) => acc + Number(expense.cost), 0 ) },
        { name: "Образование", cost: expenses.filter(expense => expense.category === "Образование").reduce((acc, expense) => acc + Number(expense.cost), 0 ) },
        { name: "Коммун. платежи", cost: expenses.filter(expense => expense.category === "Коммунальные платежи").reduce((acc, expense) => acc + Number(expense.cost), 0 ) },
        { name: "Ипотека", cost: expenses.filter(expense => expense.category === "Ипотека").reduce((acc, expense) => acc + Number(expense.cost), 0 ) },
        { name: "Прочие расходы", cost: expenses.filter(expense => expense.category === "Прочие расходы").reduce((acc, expense) => acc + Number(expense.cost), 0 ) },
        ]

    return (
        <div className="bg-slate-100">
            
            <div className="max-w-screen-lg mx-auto px-6 md:px-10 py-16 text-center text-amber-600">
                <Link to={'/'} className="hover:underline text-slate-500 font-semibold text-sm flex justify-left">Назад</Link>
                <h1 className="text-black font-bold text-4xl items-center mb-4">Расходы</h1>
                <div class="underline h-0.5 w-200 bg-amber-300 mr-auto ml-auto mb-12"></div>
                
                <Form addExpense={addExpense}/>
                
                <div> 
                
                    <div className="text-stone-600 text-lg md:text-xl">
                    <div className="bg-slate-200 text-amber-400 font-semibold rounded px-6 py-2 mb-12 flex justify-between mx-12">Всего: <span className="text-slate-500">{new Intl.NumberFormat('ru-RU').format(expenses.reduce((acc, expense) => acc + Number(expense.cost), 0))} руб</span></div>
                    
                        <div className="flex flex-row justify-center"> 
                        <Diagram data={data} />
                        {categories.map(category => (
                          
                        <div className="flex flex-row justify-center"> 
                            
                            <p className="text-lg text-slate-500 ">{category}</p>
                            <p className="text-lg text-slate-500 font-bold"> : {new Intl.NumberFormat('ru-RU').format(expenses.filter(expense => expense.category === category).reduce((acc, expense) => acc + Number(expense.cost), 0 ))} руб.</p>
                            
                            
                        </div> 
                        
                        ))}
                      </div>   
                        
                    </div>
                </div>

                {expenses.length === 0 && ( 
                <div className="mt-20 text-center text-3xl text-slate-500 font-bold">У вас пока нет расходов<br/><span className="mt-10 text-center text-base text-slate-500 font-normal">Заполните форму для добавления расходов</span></div>) 
                }

                {expenses.length > 0 && expenses.reverse().map((expense) => {
                    return (
                <Expense key={expense.id} expense={expense} deleteCosts={deleteCosts} />
                    )
            })}
            </div>
        </div>
    )



}

export default ExpensesPage

