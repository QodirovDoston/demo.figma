import React, { useEffect, useState } from 'react'
import "../Section/Section.css"
import axios from 'axios'
import { Col, Container, Form, Row } from 'react-bootstrap'

function Section() {
    const [today, setToday] = useState([])
    const [value, SetValue] = useState("")

    const FetchingData = async () => {
        const res = await axios.get(" http://localhost:3004/data")
       console.log(res);
        return res 
    }
    useEffect(() => {
        FetchingData().then((res)=>{setToday(res.data)})
    }, [])
    return (
        <div>
            <Container>
                <Row className='justify-content-center mt-5'>
                    <Form.Group className="dilm mb-3" controlId="formBasicPassword">
                        <Form.Control type="text" onChange={(e) => SetValue(e.target.value)} />
                    </Form.Group>
                    <h1 className='felter'>Лучшие предложения рядом с вами</h1>
                </Row>
                <Row>
                    {today.filter((res) => {
                        console.log(res.name);
                        return res.name.toLocaleLowerCase() === "" ? value : res.name.toLocaleLowerCase().includes(value)
                    }).map((val) => {
                        return (
                            <Col xs={3}>
                                <div className="card" key={val.id}>
                                    <img src={val.img} alt="" />
                                    <h2 className='solo'>{val.name}</h2>
                                    <p className='soso'><i class="fa-thin fa-location-dot"></i>{val.location}</p>

                                    <div className='bothbuton'>
                                        <button className='byu'>{val.price}</button>
                                        <button className='bre'>{val.sale}</button>
                                    </div>
                                </div>
                                <div className="newcard">
                                    <h1 className='newcard0'>8 990 ₽  / за ночь</h1>
                                    <p className='newcard1'>12 990  </p>
                                </div>
                            </Col>
                        )
                    })
                    }
                </Row>
            </Container>
        </div>
    )
}
export default Section
