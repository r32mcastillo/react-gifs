import { useState } from "react"
import { AddCategory,GifGrid } from "./components";

export const GifApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([ newCategory,...categories])
        //setCategories(cat=>[...cat,'casa'])
    }
    return (
        <>
            <AddCategory onNewCategory={onAddCategory} />
            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}