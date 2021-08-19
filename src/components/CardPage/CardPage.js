import './CardPage.css'
import { Row, Col, Image, Table, Breadcrumb } from 'react-bootstrap'

export default function CardPage() {
    return (
        <>
            <div className='card-page-container'>
                <Breadcrumb className='custom-breadcrumb' style={{ marginTop: '38px' }}>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item href="/products">Продукция</Breadcrumb.Item>
                    <Breadcrumb.Item href="/">(Здесь будет динамически отображаться фильтр)</Breadcrumb.Item>
                    <Breadcrumb.Item href="/" active>(Здесь будет динамически отображаться название провода)</Breadcrumb.Item>
                </Breadcrumb>
                <br/>
                <Row>
                    <Col style={{ marginTop: '0.6em' }}>
                        <Image src='cabelVertical.png' />
                    </Col>
                    <Col md={9}>
                        <Row >
                            <div className='cable-name'>
                                <span style={{ fontWeight: '800' }}>КМС-1 | КМС-2</span> ПО ТУ РБ 400083186.051-2003
                            </div>
                        </Row>
                        <Row style={{ marginTop: '35px' }}>
                            <Col>
                                <Image src='cableCut.png' />
                            </Col>
                            <Col md={7}>
                                <div className='lbl'>
                                    НАРУЖНАЯ ОБОЛОЧКА
                                </div>
                                <div className='outer-sheath-info'>
                                    Броня из стальных оцинкованных проволок
                                    Гидроизоляция бронирующего слоя
                                    Промежуточная оболочка
                                    Броня из стальных оцинкованных проволок
                                    Гидроизоляция бронирующего слоя
                                    Промежуточная оболочка
                                    Броня из стальных оцинкованных проволок
                                </div>
                            </Col>
                        </Row>
                        <Row className='text-rows'>
                            <div className='lbl'>
                                НАЗНАЧЕНИЕ
                            </div>
                            <div className='lbl-info'>
                                <span className='span-bold'>КМС-1</span> - для монтажа высокочастотных цепей с передачей по ним дистанционного питания для работы в диапазоне частот 12-552 кГц КМС-2 - дня монтажа высокочастотных цепей дня работы в рабочем диапазоне частот 12-250 кГц
                                Вид климатического исполнения У, категория размещения 4 по ГОСТ 15150-69
                            </div>
                        </Row>
                        <Row className='text-rows'>
                            <div className='lbl'>
                                КОНСТРУКЦИЯ
                            </div>
                            <div className='lbl-info'>
                                Токопроводная жила должна быть скручена из семи медных проволок (диаметр 0.20 мм для КМС-1 и 0.15 мм для КМС-2).
                                <ul style={{ listStyle: 'none', marginTop: '0.5em' }}>
                                    <li><span className='span-bold'>Трубка</span> - полиэтилен.</li>
                                    <li><span className='span-bold'>Экран</span> - медная проволока 0.12 мм (плотность экрана не менее 90%).</li>
                                </ul>
                            </div>
                        </Row>
                        <Row className='text-rows'>
                            <div className='lbl'>
                                ИЗОЛЯЦИЯ
                            </div>
                            <div className='lbl-info'>
                                Изоляция — Полиэтилен
                                <ul style={{ listStyle: 'none', marginTop: '0.5em' }}>
                                    <li><span className='span-bold'>Оболочка</span> кабеля — Поливинилхлоридный пластикат</li>
                                    <li><span className='span-bold'>С экраном</span> — Да</li>
                                </ul>
                            </div>
                        </Row>
                    </Col>
                </Row>
                <Row className='text-rows'>
                    <div className='lbl'>
                        ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ
                    </div>
                    <div className='lbl-info'>
                        <ul>
                            <li>Электрическое сопротивление жилы, пересчитанное на 1 км длины и температуру 20 ºС –не более 100 Ом для КМС-1, не более 165 для КМС-2.</li>
                            <li>Электрическое сопротивление изоляции жил, пересчитанное на температуру 20 ºС и длину 1 км – не менее 10000 МОм для КМС-1, не менее 8000 МОм для КМС-2</li>
                            <li>Коэффициент затухания на длине 100 м: не более 1, 0 дБ для КМС-1, не более 1.3 дБ для КМС-2</li>
                            <li>Переходное затухание на ближнем конце между двумя кабелями, проложенными или намотанными на катушку вплотную друг к другу на длине 100 м, при частоте 110 кГц- 112 дБ для КМС-2 и при частоте 250 кГц 112 дБ для КМС-1.</li>
                            <li>Рабочая емкость на 1 км не более 40 нФ для КМС-1 и 50 нФ для КМС-2.</li>
                        </ul>
                    </div>
                </Row>
                <Row className='text-rows'>
                    <div className='lbl'>
                        УСЛОВИЯ ЭКСПЛУАТАЦИИ
                    </div>
                    <div className='lbl-info'>
                        <ul>
                            <li><span className='span-bold'>Строительная длина кабеля КМС-1</span> - не менее 100 м, кабеля КМС-2 - не менее 50 м. Допускаются коротко меры не менее 10 м в количестве не более 20% от партии</li>
                            <li><span className='span-bold'>Диапазон рабочих температур</span> - от минус 40°С до плюс 60°С</li>
                            <li><span className='span-bold'>Срок службы кабаля</span> - 20 лат</li>
                            <li><span className='span-bold'>Гарантийный срок эксплуатации</span> - 3 года</li>
                        </ul>
                    </div>
                </Row>
                <Row className='text-rows'>
                    <div className='lbl'>
                        МАКРОРАЗМЕРЫ
                    </div>
                    <div className='lbl-info'>
                        <Table responsive className='table'>
                            <thead>
                                <tr>
                                    <th>Номинальное сечение жил, мм²</th>
                                    <th>Число жил</th>
                                    <th>Максимальный диаметр, мм</th>
                                    <th>Масса, кг/км</th>
                                    <th>Конструкция жилы</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0.2</td>
                                    <td>2</td>
                                    <td>7.3</td>
                                    <td>54</td>
                                    <td>7*0.20</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Row>
            </div>
        </>
    )
}