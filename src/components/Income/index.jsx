import { format } from "date-fns";
import { ru } from "date-fns/locale";

const Income = ( { income, deleteCostsIncome } ) => {

    return (

        <div className="flex flex-col my-3 border-b-2">
            <div className="flex flex-row justify-between items-left">
                <div className="flex flex-col">
                    <p className="text-slate-500 font-semibold text-lg">{income.category}  <span className="rounded bg-amber-100 px-1 text-sm text-slate-700">{format(income.data, "dd MMMM yyyy", { locale: ru })}</span></p>
                </div>
                <div className="text-slate-500 font-semibold text-lg"> - {new Intl.NumberFormat('ru-RU').format(income.cost)} руб</div>
                <a className="hover:text-amber-400 cursor-pointer bg-slate-200 text-slate-500 font-semibold rounded px-6 py-2 mb-1" onClick={() => deleteCostsIncome(income.id)}>Удалить</a>
            </div>
        </div>

    )

}

export default Income


