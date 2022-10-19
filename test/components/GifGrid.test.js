import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en <GifGrid />',()=>{
    const category = 'One Punch';
    test('leading inicialmente',()=>{
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading:true
        });
        render(<GifGrid category={category} />);

        expect(screen.getByText('Cargando ...'));
        expect(screen.getByText(category));
    })
    test('debe mostrar items cuado se cargan las imagenes',()=>{
        const gifs =[
            {id:'1',title:'Saitama',url:"https://casa.com"},
            {id:'2',title:'Goku',url:"https://casa.com"}
        ]
        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading:true
        })
        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);
    })
})