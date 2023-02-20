import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../Footer/Footer.css"
const icon = require('./img/logo.png')

function Footer() {
  return (
    <div className='section'>
      <section>
        <Container>
          <Row>
            <Col xs={6}>
              <div className="serch">
                <h1 className='navos'>Новостная рассылка</h1>
                <p className='nimadur'>Подписка на новости, акции и скидки </p>
                <input className='unpt' type="text" />
                <button className='byutn'>Подписаться</button>
                <p className='najmit'>Нажимая «Подписаться», вы соглашаетесь c <span>правилами использования сервиса</span> и<span> обработки персональных данных</span></p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="foter">
        <Container>
          <Row className='justify-content-between'>
            <Col xs={2}>
              <ul>
                <li className='Onasi'>Сотрудничество</li>
                <li className='Onas'>Добавить отель</li>
                <li className='Onas'>Вход для отелей</li>
                <li className='Onas'>Парнерская программа</li>
                <li className='Onas'>Реклама</li>
              </ul>
            </Col>
            <Col xs={2}>
              <ul>
                <li className='Onasi'>Помощь</li>
                <li className='Onas'>Добавить отель</li>
                <li className='Onas'>Вход для отелей</li>
                <li className='Onas'>Парнерская программа</li>
                <li className='Onas'>Реклама</li>
              </ul>
            </Col>
            <Col xs={2}>
              <li className='Onasi'>О нашей компании</li>
              <li className='Onas'>О нас</li>
              <li className='Onas'>Карьера</li>
              <li className='Onas'>Наша команда</li>
              <li className='Onas'>Новости и события</li>
              <li className='Onas'>Блог</li>
            </Col>
            <Col xs={3}>
              <li className='Onasi'>Нужна помощь?</li>
              <li className='Onas'>+7 (495) 777-40-50</li>
              <li className='Onas'>Заказать звонок</li>
              <li className='Onas'>г. Москва, Варшавское ш, д.68 к.3 </li>
            </Col>
          </Row>
          <hr />
          <div className="nihoya">
            <img className='tushpasga' src={icon} alt="" />
            <p className='boldi'>© 2009-2019 Интернет магазинВсе права защищены.
              Запрещено использование материалов сайта без согласия автора.</p>
          </div>
        </Container>
      </div>

    </div>
  )
}

export default Footer
