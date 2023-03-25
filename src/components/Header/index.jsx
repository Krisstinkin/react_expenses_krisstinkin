const Header = () => {

    return (
        <header className="bg-slate-50 py-8 text-slate-500 font-semibold text-base drop-shadow-xl">
            <div className="max-w-screen-lg flex justify-between mx-auto px-10">
                <nav className="flex gap-8 justify-center items-center">
                
                <img alt='логотип' src='https://acdn.tinkoff.ru/static/documents/bcfd0f80-18d5-44c5-af3d-ffef02d243b2.png' className='lg:w-2/12 h-2/12 w-1/2 md:-mt-18 md:-ml-24'></img>
                
                <div>
                    Банк
                </div>
                <div>
                    Бизнес
                </div>
                <div>
                    Инвестиции
                </div>
                <div>
                    Страхование
                </div>
                <div>
                    Путешествия
                </div>
                <div className="text-sky-800 font-semibold text-lg">
                    Вход
                </div>

                </nav>
                
            </div>
        </header>
    )
}

export default Header