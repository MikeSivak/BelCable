import './SecondBanner.css'

export default function SecondBanner() {
    return (
        <>
            <div class="second-banner">
                <div class='bannerlbl'>
                    <p class='lbl'>ПРЕИМУЩЕСТВА</p>
                    <div class='row bannerText'>
                        <div class='col-md'>
                            <div class='row infolbl'>100 293</div>
                            <div class='row infoValue'>
                                КИЛЛОМЕТРОВ
                                кабельной продукции высокого качества реализовано в 2020 году
                            </div>
                        </div>
                        <div class='col-md'>
                            <div class='row infolbl'>1859</div>
                            <div class='row infoValue'>ТОН</div>
                        </div>
                        <div class='col-md'>
                            <div class='row infolbl'>30000</div>
                            <div class='row infoValue'>
                                КИЛЛОМЕТРОВ
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div class='row bannerText'>
                        <div class='col'>
                            <div class='row infolbl'>683</div>
                            <div class='row infoValue'>СОТРУДНИКОВ</div>
                        </div>
                        <div class='col'>
                            <div class='row infolbl'>345</div>
                            <div class='row infoValue'>
                                МОДЕРНЕЗИРОВАННОГО ОБОРУДОВАНИЯ
                            </div>
                        </div>
                        <div class='col'>
                            <div class='row infolbl'>867</div>
                            <div class='row infoValue'>ИННОВАЦИОННАЯ ПРОДУКЦИЯ</div>
                        </div>
                    </div>
                </div>

                <img class="image1" src="backBanner2.png" />
                <img class="image2" src="frontBanner2.png" />
                <img class='image3' src='bannerImage2.png' />
            </div>
        </>
    )
}