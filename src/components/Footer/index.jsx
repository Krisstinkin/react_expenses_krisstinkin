const Footer = () => {
    return (
        <footer className="bg-white py-8 text-slate-500 font-semibold text-base">
        <div className="max-w-screen-lg flex justify-between mx-auto px-10">
            <div className="flex gap-8 justify-center items-center">
            
            <img alt='логотип' src='https://acdn.tinkoff.ru/static/documents/bcfd0f80-18d5-44c5-af3d-ffef02d243b2.png' className='lg:w-2/12 h-2/12 w-1/2 md:-mt-18 md:-ml-24'></img>
            
            <div className="text-gray-400 font-thin text-base">
                Для звонков по России
            </div>
           
            <div className="text-gray-400 font-bold text-2xl">
                8 800 555-77-78
            </div>

            </div>
            
        </div>
    </footer>
    )
}

export default Footer