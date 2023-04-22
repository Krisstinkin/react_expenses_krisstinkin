const FiltersIncome = ( {filterCategory}  ) => {

    const categorys = ['Все доходы', 'Заработная плата', 'Фриланс', 'Преподавание', 'Инвестиции', 'Прочие доходы'] 

    return(
        <div className="bg-slate-200 text-amber-400 font-semibold rounded px-6 py-2 mb-12 flex justify-between mx-12">
            <p>Доходы по категории: </p>
            <select onChange={(event) => filterCategory(event.target.value)} className="text-slate-500">
                {categorys.map(category => (
                    <option key={category}>{category}</option>
                ))}
            </select>
        </div>
    )
}

export default FiltersIncome

