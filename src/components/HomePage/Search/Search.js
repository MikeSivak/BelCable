import { Button } from 'react-bootstrap'
import './Search.css'

export default function Search() {
    return (
        <>
            <div className='searchBlock'>
                <img className='searchImage' src='search.png' alt='' />
                <input type='text' placeholder='Поиск по марке кабеля' className='seacrhInput'></input>
                <Button className='searchButton' variant='danger'>Искать</Button>
            </div>
        </>
    )
}