import './FirstBanner.css'
import '../../../fonts/fonts.css'

export default function FirstBanner() {
    return (
        <>
            <div class="parent">
                <div class='bannerlbl'>
                    <p class='lbl'>ОТВЕЧАЕМ ЗА КАЧЕСТВО</p>
                    <p class='bannerText'>Проверь, не купили ли контрафакт</p>
                </div>
                <img src='hpBanner1.png' className='banner-image-1' alt='image'/>
            </div>
        </>
    )
}