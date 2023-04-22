const Filters = ( {filterCategory}  ) => {

    const categories = ['Все расходы', 'Еда', 'Связь', 'Транспорт', 'Красота', 'Образование', 'Коммунальные платежи', 'Ипотека', 'Прочие расходы'] 

    return(
        <div className="bg-slate-200 text-amber-400 font-semibold rounded px-6 py-2 mb-12 flex justify-between mx-12">
            <p>Расходы по категории: </p>
            <select onChange={(event) => filterCategory(event.target.value)} className="text-slate-500">
                {categories.map(category => (
                    <option key={category}>{category}</option>
                ))}
            </select>
        </div>
    )
}

export default Filters

