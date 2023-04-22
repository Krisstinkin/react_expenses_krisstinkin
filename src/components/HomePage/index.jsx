import { Link } from "react-router-dom"


const HomePage = () => {
    return (
                
        <div className="flex justify-center items-center mt-10 mb-10 flex-col">
                        
                <div className="text-black font-bold text-4xl items-center justify-center">
                    Расходы и доходы
                </div>

                <div className="flex justify-center mt-10 mb-20">
                    <div className="bg-slate-200 mx-5 my-5 rounded-md drop-shadow-sm pt-10 pb-5 hover:scale-105 transition-all duration-600">
                    <p className="text-slate-500 font-bold text-lg text-center">Тинькофф расходы</p>
                    <p className="text-slate-500 font-thin text-lg text-center">Понятные категории и удобное приложение</p>
                    <img alt='логотип' src='https://i.postimg.cc/26G57KX4/51d61359-aed5-4f52-8756-aa1926fd5b85.png' className='w-96 mt-10'></img>
                    <div className="flex justify-center items-center">
                        <Link to={'/ExpensesPage'} className="rounded text-lg text-amber-400 px-6 py-2 bg-white mt-6 mb-2 hover:text-amber-500 transition-all duration-900">
                        Добавить расходы
                        </Link>
                    </div>
                    </div>

                    <div className="bg-amber-100 mx-5 my-5 rounded-md drop-shadow-sm pt-10 pb-5 hover:scale-105 transition-all duration-600">
                    <p className="text-amber-500 font-bold text-lg text-center">Тинькофф доходы</p>
                    <p className="text-amber-400 font-thin text-lg text-center">Понятные категории и удобное приложение</p>
                    <img alt='логотип' src='https://i.postimg.cc/Y9cn4xF1/af67b058-f74e-44eb-b9fd-4828f3df4d71.png' className="w-96 mt-10"></img>
                    <div className="flex justify-center items-center">
                        <Link to={'/IncomePage'} className="rounded text-lg text-slate-500 px-6 py-2 bg-white mt-6 mb-2 hover:text-slate-800 transition-all duration-900">
                        Добавить доходы
                        </Link>
                    </div>
                    </div>

                </div>

        </div>
        
        
    )
}

export default HomePage