import headerStyles from './Header.css';

export default function Header() {
    return (
        <>
            <ul className='navigation'>
                <li><a href="#">КОМПАНИЯ</a></li>
                <li><a href="#">ПРОИЗВОДСТВО</a></li>
                <li><a href="#">ПРОДУКЦИЯ</a></li>
                <li><a href="#">ЗАКАЗЧИКАМ</a></li>
                <li><a href="#">ПРОЕКТНЫМ ИНСТИТУТАМ</a></li>
                <li><a href="#">РЕАЛИЗОВАННЫЕ ПРОЕКТЫ</a></li>
            </ul>
            <ul className='navigation' style={{background:'#CDDBEC'}}>
                <li><a href="#">НАШИ КЛИЕНТЫ</a></li>
                <li><a href="#">ОТЗЫВЫ</a></li>
                <li><a href="#">ПРЕСС-ЦЕНТР</a></li>
                <li><a href="#">НАШИ НАГРАДЫ</a></li>
                <li><a href="#">КЛИЕНТАМ</a></li>
                <li><a href="#">КОНТАКТЫ</a></li>
            </ul>
        </>
    )
}