import Styles from './Footer.css';

export default function Footer() {
    return (
        <>
            <footer class="text-center text-lg-start text-muted" style={{ background: '#343753' }}>
                <section
                    class="d-flex justify-content-center justify-content-lg-between border-bottom"
                />

                <section class="">
                    <div class="container text-center text-md-start mt-5" style={{ color: 'white' }}>

                        <div class="row mt-3">

                            <div class="col-md col-lg-4 col-xl-8 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4" style={{ color: 'red' }}>
                                    Беларускабель
                                </h6>
                                <p>
                                    Более 50 лет ОАО "Беларускабель" - одно из ведущих кабельных предприятий в Республике Беларусь, которое изготавливает и поставляет кабельную продукцию для отраслей и сфер потребления - таких как радиоэлектроника, приборостроение, связь, авиационная техника, строительство, телекоммуникация и электротехника.  Мы всегда рады новым проектам и партнёрам! Изготавливаем кабель и провод по ГОСТу, принимаем заказы на разработку и производство по Вашим ТЗ и ТУ, всегда готовы предоставить консультацию по любым вопросам.
                                </p>
                            </div>

                            <div class="col-md-2 col-lg-2 col-xl-1 mx-auto mb-4">
                                <a href="#!" class="text-reset" >Компания</a>
                                <br />
                                <a href="#!" class="text-reset">Производство</a>
                                <br />
                                <a href="#!" class="text-reset">Продукция</a>
                                <br />
                                <a href="#!" class="text-reset">Заказчикам</a>
                                <br />
                                <a href="#!" class="text-reset">Пресс-центр</a>
                                <br />
                                <a href="#!" class="text-reset">Контакты</a>

                            </div>
                            <div class="col-md-2 col-lg-2 col-xl-1 mx-auto mb-4 linkBlock">
                                <a href="#!" class="text-reset">Приёмная</a>
                                <br />
                                <a href="#!" class="text-reset" style={{ whiteSpace: 'nowrap' }}>+375-236-24-77-29</a>
                                <br /><br />
                                <a href="#!" class="text-reset" style={{ whiteSpace: 'nowrap' }}>Отдел продаж</a>
                                <br />
                                <a href="#!" class="text-reset" style={{ whiteSpace: 'nowrap' }}>800 123 12 12</a>
                            </div>
                        </div>
                        <div class="col-md col-lg-4 mx-2 p-4" style={{ color: 'white' }}>
                            © 2021
                        </div>
                    </div>
                </section>



                {/* <div class="col-md col-lg-4 col-xl-10 mx-auto p-4" style={{ color: 'white' }}>
                    © 2021
                </div> */}

            </footer>
        </>
    )
}