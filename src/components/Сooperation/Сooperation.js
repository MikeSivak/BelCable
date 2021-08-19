import './Сooperation.css'
import { Row, Breadcrumb } from 'react-bootstrap'

export default function Сooperation() {
    return (
        <>
            <div className='cooperation-page-container'>
                <Breadcrumb className='custom-breadcrumb' style={{ marginTop: '38px' }}>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item href="/">Компания</Breadcrumb.Item>
                    <Breadcrumb.Item active>Предложение к сотрудничеству</Breadcrumb.Item>
                </Breadcrumb>
                <div className='cooperation-page-label'>
                    Предложение к сотрудничеству
                </div>
                <Row className='cooperation-page-row'>
                    <div className='cooperation-page-text'>
                        <span>Компания ОАО «Беларускабель» приглашает к сотрудничеству проектные организации</span> в части применения в проектах КПП производства заводов.  Наша компания готова оказать разного рода содействие и информационную поддержку, для обеспечения наиболее удобного и комфортного применения продукции на стадии проектирования и строительства:
                        <ul>
                            <li>Проведение презентации;</li>
                            <li>Обеспечение каталогами;</li>
                            <li>Консультирование о кабельно-проводниковой продукции, её прокладке, условиях эксплуатации, возможности применения для тех или иных задач, а также о сопутствующих материалах;</li>
                            <li>Расчёт сметной стоимости;</li>
                            <li>Подбор изделий и технических решений для выполнения задач по проекту;</li>
                            <li>Сотрудничество по агентскому договору.</li>
                        </ul>
                        <br />
                        <p><span>Контакты отдела:</span></p>
                        <p>тел.
                            <span style={{ color: 'black', fontWeight: '600' }}> +375-236-24-28-32</span>
                        </p>
                    </div>
                </Row>
            </div>
        </>
    )
}