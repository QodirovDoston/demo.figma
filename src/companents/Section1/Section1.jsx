import React from 'react'
import '../Section1/Sectin1.css'
import { Col, Container, Row } from 'react-bootstrap'
const locatsia = require('./img/3.png')
const locatsia1 = require('./img/1.png')

export default function Section1() {
  return (
    <div>
      <Container>
        <Row className='justify-content-center'>
          <Col xs={9}>
          <button className='zagruska'>Загрузить еще</button>
          <h1 className='ser'>Сервис бронирования жилья для поездок</h1>
          <p className='sayt'>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. </p>
          <p className='sayt'>При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия</p>
          </Col>
        </Row>
        <Row className='justify-content-spece-between'>
          <Col xs={5}>
             {/* <div className="dix">
          <ifRame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.3238906752495!2d67.3757245114281!3d40.35734210094675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f52ad609aa6f419%3A0xbc027e66d8b6d235!2sXO&#39;JA%20BOG&#39;BON%20OTA%20ZIYORATGOHI!5e0!3m2!1sru!2s!4v1676883495638!5m2!1sru!2s" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></ifRame>
            </div>  */}
          </Col>
          <Col xs={5}>
            <div className="cer">
              <div className="img">
              <img src={locatsia1} alt="" />
              </div>
            <div className="sozlr">
            <h2 className='sum'>10 000 +</h2>
              <p className='nar'>Вариантов проживания </p>
            </div>
            </div>
            <div className="cer">
              <div className="img">
              <img src={locatsia} alt="" />
              </div>
            <div className="sozlr">
            <h2 className='sum'>Без наценок</h2>
              <p className='nar'>и скрытых комиссий </p>
            </div>
            </div>
            <div className="cer">
              <div className="img">
              <img src={locatsia} alt="" />
              </div>
            <div className="sozlr">
            <h2 className='sum'>Более 20 000</h2>
              <p className='nar'>Довольных клиентов </p>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
