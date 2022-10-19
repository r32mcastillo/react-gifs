import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en <GifItem />',()=>{
    const title ='saitama';
    const url='https://algoporhacer.com/';
    test('match con snapshot',()=>{
        const {container}=render(<GifItem title={title} url={url}/>);
        //expect(container).toMatchSnapshot(); 
    })

    test('url y alt indicados',()=>{
        render(<GifItem title={title} url={url}/>);
        //expect(screen.getByRole('img').src).toBe(url)
        const {src,alt}=screen.getByRole('img');
        expect(src).toBe(url)
        expect(alt).toBe(title)

    })
    test('tener titulo',()=>{
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    })
})