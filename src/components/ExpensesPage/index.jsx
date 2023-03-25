import { useState } from "react";
import Expense from 'components/Expense';
import Form from "components/Form";
import Diagram from "components/Diagram";

const ExpensesPage = () => {

    const [expenses, setExpenses] = useState([
        {
            id: 1,
            category: "Путешествия",
            data: "28 декабря 2022",
            cost: 33500
        },
        {
            id: 2,
            category: "Развлечения",
            data: "2 января 2023",
            cost: 3500
        },
        {
            id: 3,
            category: "Еда",
            data: "2 января 2023",
            cost: 1537
        },
        {
            id: 4,
            category: "Еда",
            data: "10 января 2023",
            cost: 3890
        },
        {
            id: 5,
            category: "Образование",
            data: "15 января 2023",
            cost: 20900
        },
        {
            id: 6,
            category: "Одежда",
            data: "17 января 2023",
            cost: 6400
        },
        {
            id: 7,
            category: "Еда",
            data: "17 января 2023",
            cost: 640
        },
        {
            id: 8,
            category: "Коммунальные платежи",
            data: "21 января 2023",
            cost: 5320
        },
        {
            id: 9,
            category: "Еда",
            data: "3 февраля 2023",
            cost: 7800
        },
        {
            id: 10,
            category: "Прочие расходы",
            data: "15 февраля 2023",
            cost: 2970
        },
         {
            id: 11,
            category: "Авто",
            data: "22 февраля 2023",
            cost: 6400
        },
         {
            id: 12,
            category: "Еда",
            data: "27 февраля 2023",
            cost: 2400
        }
    ])
    
    const categorys = ['Путешествия', 'Развлечения', 'Образование', 'Еда', 'Одежда', 'Коммунальные платежи', 'Авто', 'Прочие расходы']

    const addExpense = (expense) => { // передаем эту функцию в тег формы как свойство
        setExpenses([expense, ...expenses]) //копируем всё текущее в новый массив и добавляем еще один элемент массива
    }

    const data = [
        { name: "Путешествия", cost: expenses.filter(expense => expense.category === "Путешествия").reduce((acc, expense) => acc + Number(expense.cost), 0 ) },
        { name: "Развлечения", cost: expenses.filter(expense => expense.category === "Развлечения").reduce((acc, expense) => acc + Number(expense.cost), 0 ) },
        { name: "Образование", cost: expenses.filter(expense => expense.category === "Образование").reduce((acc, expense) => acc + Number(expense.cost), 0 ) },
        { name: "Еда", cost: expenses.filter(expense => expense.category === "Еда").reduce((acc, expense) => acc + Number(expense.cost), 0 ) },
        { name: "Одежда", cost: expenses.filter(expense => expense.category === "Одежда").reduce((acc, expense) => acc + Number(expense.cost), 0 ) },
        { name: "Коммун. платежи", cost: expenses.filter(expense => expense.category === "Коммунальные платежи").reduce((acc, expense) => acc + Number(expense.cost), 0 ) },
        { name: "Авто", cost: expenses.filter(expense => expense.category === "Авто").reduce((acc, expense) => acc + Number(expense.cost), 0 ) },
        { name: "Прочие расходы", cost: expenses.filter(expense => expense.category === "Прочие расходы").reduce((acc, expense) => acc + Number(expense.cost), 0 ) },
        ]

    return (
        <div className="bg-slate-100">
            <div className="max-w-screen-lg mx-auto px-6 md:px-10 py-16 text-center text-amber-600">
                
                <h1 className="text-2xl md:text-3xl mx-auto py-16 text-amber-600">Учет расходов</h1>
                <Form addExpense={addExpense}/>

                <div> 
                    <Diagram data={data} />
                    <div className="text-stone-600 text-lg md:text-xl">
                        {categorys.map(category => (
                        <div className="flex flex-row justify-center"> 
                            <p>{category}</p>
                            <p className="text-emerald-800 font-medium"> : {new Intl.NumberFormat('ru-RU').format(expenses.filter(expense => expense.category === category).reduce((acc, expense) => acc + Number(expense.cost), 0 ))} руб.</p>
                        </div> 
                        ))}
                        <p className="font-semibold py-1">Всего - {new Intl.NumberFormat('ru-RU').format(expenses.reduce((acc, expense) => acc + Number(expense.cost), 0))} руб.</p>
                    </div>
                </div>

                {expenses.length === 0 && ( 
                <div className="mt-20 text-center text-7xl text-gray-400 font-thin">У вас пока нет расходов. <br/>Вы можете добавить их выше.</div>) 
                }

                {expenses.length > 0 && expenses.reverse().map((expense) => {
                    return (
                <Expense key={expense.id} expense={expense}  />
                    )
            })}
            </div>
        </div>
    )



}

export default ExpensesPage