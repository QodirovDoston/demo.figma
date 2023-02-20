import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../Header/Header.css"
const mygord = require('../Header/img/Frame 3.png')
const mip1 = require("./img/map-pin.png")
const mip = require("./img/map-pin.png")



function Header() {
  return (
    <>
      <img className='mygorod' src={mygord} alt="" />
      <Container>
        <Row>
          <Col xs={3} className="dost">
            <h2 className='zabiri'>Забронируйте уникальное жилье быстро и просто</h2>
            <p>Лучший способ арендовать квартиру </p>
          </Col>
        </Row>
        <Row>
          <input className='fer' type="text" />
          <Col xs={2}>
          <img className='mire1' src={mip1} alt="" />
          </Col>
          <Col xs={2}>
          <img className='mire2' src={mip} alt="" />
          </Col>
          <Col xs={2}>
          <img className='mire3' src={mip} alt="" />
          </Col>
          <Col xs={3}>
          <button className='btttn'>Начать поиск</button>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Header