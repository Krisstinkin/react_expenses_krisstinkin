const Expense = ( { expense } ) => {

    return(
        <div className="flex flex-col my-3 border-b-2">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col items-start">
                    <p className="border rounded-xl bg-emerald-300 px-1 text-sm text-emerald-800">{expense.data}</p>
                    <p className="text-stone-600">{expense.category}</p>
                </div>
                <div className="text-xl bold text-stone-600"> - {new Intl.NumberFormat('ru-RU').format(expense.cost)} руб.</div>
            </div>
        </div>
           
    )
}

export default Expense