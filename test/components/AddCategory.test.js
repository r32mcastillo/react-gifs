import { render,screen,fireEvent } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Puebas en <AddCategory />',()=>{
    test('cambiar input',()=>{
        render(<AddCategory onNewCategory={()=>{}} />)
        const input = screen.getByRole('textbox');
        fireEvent.input(input,{target:{value:'Goku'}});
        //screen.debug();
        expect(input.value).toBe('Goku');

    })
    test('llamar onNewCategory si el input tiene valor',()=>{
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        
        render(<AddCategory onNewCategory={onNewCategory} />)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input,{target:{value:inputValue}});
        fireEvent.submit(form); 

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    })
    test('no llamar a onNewCategory',()=>{
        const onNewCategory = jest.fn();
        
        render(<AddCategory onNewCategory={onNewCategory} />)
        const form = screen.getByRole('form');
        fireEvent.submit(form); 
        expect(onNewCategory).not.toHaveBeenCalled();
    })
})