import React from 'react'
import '../Section1/Sectin1.css'
import { Col, Container, Row } from 'react-bootstrap'
const locatsia = require('./img/3.png')
const locatsia1 = require('./img/1.png')
const locatsia2 = require('./img/2.png')


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
          <Col xs={7}>
           <img className='locatsiya' src={locatsia2} alt="" />
          </Col>
          <Col xs={4}>
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
