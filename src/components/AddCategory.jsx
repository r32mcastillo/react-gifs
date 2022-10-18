import { useState } from "react"

export const AddCategory=({onNewCategory})=>{
    const [inputValue,setInputValue]=useState('');

    const oninputChange =({target})=>{
        setInputValue(target.value);
    }
    const onSubmit =(e)=>{
        e.preventDefault();
        if(inputValue.trim().length <= 1) return 0;
        //setCategories(categories=>[...categories,inputValue]);
        onNewCategory(inputValue.trim());

        setInputValue('');
    }
    return(
        <form onSubmit={onSubmit}>

            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={oninputChange}
            />
        </form>
    )
}