import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";



const Form = ( { addExpense } ) => {

    const categories = ['Еда', 'Связь', 'Транспорт', 'Красота', 'Образование', 'Коммунальные платежи', 'Ипотека', 'Прочие расходы']

    

     
    const [ cost, setCost ] = useState('')
    const [ category, setCategory ] = useState(categories[0])
    const [ selectedDate, setSelectedDate ] = useState(null)
    
    const handleClick = event => {
        event.preventDefault() //остановит действие по умолчанию - страница не будет сама обновляться(напр, когда используем форму и кнопку с типом submit)
        const expense = {
            category,
            data: selectedDate,
            cost,
            id: uuidv4()
        }
        addExpense(expense)
        
        setCost('')
        setCategory(categories[0])
        setSelectedDate(null)
        
    }


        return (
            <div>
                
                <form>
                
                    <div className="mx-10 my-12 flex justify-evently flex-col md:flex-row md:justify-center text-stone-700 gap-4">
                        <div className="flex flex-col">
                            <input 
                                onChange={(event) => setCost(event.target.value)}
                                placeholder="00.00"
                                value={cost} 
                                name="cost" 
                                type="text"                                  
                                className="col-span-2 border border-solid border-gray-400 rounded-md h-8 pl-1" 
                            />
                        </div>
            
                        <div className="flex flex-col">
                            <select 
                                onChange={(event) => setCategory(event.target.value)}
                                value={category} 
                                className="col-span-2 border border-solid border-gray-400 rounded h-8 pl-1" >
                                {categories.map(category => (
                                    <option key={category}>{category}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col">
                        
                        </div>
                            <Datepicker selected={selectedDate} onChange={(date) => setSelectedDate(date)}
                            dateFormat="dd.MM.yyyy"
                            maxDate={ new Date()} 
                            value={selectedDate} 
                            locale="es"
                            name="selectedDate" 
                            placeholderText="ДД.ММ.ГГГГ"
                            className="col-span-2 border border-solid border-gray-400 rounded h-8 pl-1" 
                            />
                        <button onClick={handleClick} type="submit" className="bg-amber-400 text-white font-semibold rounded px-12 py-2">Добавить</button>
            
                    </div>
                </form>
            </div>
        )
    }

export default Form