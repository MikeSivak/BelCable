import { Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Reviews.css'

export default function Reviews() {

    const reviews = [
        {
            name: 'Каширский К.М.',
            position: 'Главный энергетик ООО «УК «Межегейуголь»',
            label: 'Партии кабелей эксплуатируются в условиях и на оборудовании ООО «УК «Межегейуголь» с целью определения соответствия кабеля требованиям эксплуатации.',
            info: `Кабели марки HoldMine КГЭЖ 3х16+1х10+1х16 и HoldMine КГЭТЖо 3x16+1x10+3x1,5 эксплуатируются на самоходных вагонах Shuttle Car (Caterpillar) отрезками от 200 м до 300м.
            Преимуществами данных марок являются ремонтопригодность и меньший диа¬метр внешней оболочки, максимально соответствующий применяемым намоточным ба¬рабанам и отклоняющим устройствам.
            Кабели выдержали эксплуатационные испытания. Данные испытания подтвердили его соответствие эксплуатационной надежности.
            Конструкции кабелей и основные технические характеристики, соответствуют тре¬бованиям безопасности и условиям эксплуатации.
            Кабель марки HoldMine КГЭТЖо имеет более прочную и стойкую к механическим и динами-ческим нагрузкам оболочку, кабель имеет профилированный сердечник и симметричную конструкцию, что снижает вероятность повреждения двух жил.
            Кабель марки КГЭЖ также имеет профилированный сердечник, жилу заземления усиленной конструкции и дополнительную (запасную) жилу.
            ООО «УК «Межегейуголь» имеет намерение дальнейшей эксплуатации кабельной продукции серии HoldMine  КГЭЖ и HoldMine  КГЭТЖо производства АО «Сибкабель».`,
            image: 'rev1.png'
        }
    ]

    return (
        <>
            <div className='reviews-page-container'>
                <div className='reviews-page-label'>
                    Отзывы
                </div>
                <div className='reviews-page-info'>
                    <Row className='reviews-page-row'>
                        <Col md={6}>
                            <div className='reviews-page-text'>
                                <p><span>ОАО «Беларускабель»</span>  - ведущее предприятие электротехнической отрасли России. В его состав входят три завода – АО «Электрокабель» Кольчугинский завод» (Кольчугино, Владимирская область), АО «Сибкабель» (Томск), АО «Уралкабель» (Екатеринбург) и Научно-исследовательский, проектно-конструкторский и технологический кабельный институт – АО «НИКИ г. Томск» (Томск).</p>
                                <p>Наши клиенты ценят ОАО «Беларускабель» за высокое качество продукции, готовность удовлетворять повышенные требования к кабельно-проводниковой продукции и за постоянное расширение ассортимента.</p>
                            </div>
                            <div className='history-button-container'>
                                <Link>
                                    <Button bsPrefix='history-button'>История завода</Button>
                                </Link>
                            </div>
                        </Col>
                        <Col className='reviews-col-image'>
                            <Image src='review.png' alt='image' />
                        </Col>
                    </Row>

                    <div className='reviews-list'>
                        {reviews.map((review) => (
                            <Row className='reviews-page-row'>
                                <Col className='reviews-col-image'>
                                    <Image className='col-image' src={review.image} alt='image' />
                                </Col>
                                <Col md={7}>
                                    <input type="checkbox" id="button" />
                                    <div className='reviews-page-text personal-review'>
                                        <span>{review.label}</span>
                                        {review.info}
                                    </div>
                                    <label for="button">...Читать полностью</label>
                                    <div className='review-author-info'>
                                        <p><span style={{ fontWeight: 'bold', fontSize: '22px' }}>{review.name}</span></p>
                                        <p>{review.position}</p>
                                    </div>
                                </Col>
                            </Row>
                        ))
                        }
                    </div>

                </div>
            </div>
        </>
    )
}