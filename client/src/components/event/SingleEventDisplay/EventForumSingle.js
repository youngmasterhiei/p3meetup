import React, { Component } from 'react';
import { Container, Row, Col, Table, TableBody, TableHead } from 'mdbreact';
import ScrollArea from 'react-scrollbar';


class EventForumSingle extends Component {
    render() {
        return (
            <Container style={{ maxWidth: '80%' }}>
                <Row>
                    <h1> Comments</h1>
                </Row>
                <Row>

                    <ScrollArea
                        speed={0.8}
                        className="area"
                        contentClassName="content"
                        vertical={true}
                    >

                        <ul>
                            <li>Thread
                        <ul>
                                    <li>John Smith: this is going to be great i cant wait.</li>
                                    <li><button>reply</button></li>
                                </ul>
                            </li>
                            <li>Mike Thomas : Wow im so excited </li>
                            <li>Mike Thomas : Wow im so excited </li>

                            <li>Mike Thomas : Wow im so excited </li>
                            <li>Mike Thomas : Wow im so excited </li>
                            <li>Mike Thomas : Wow im so excited </li>
                            <li>Mike Thomas : Wow im so excited </li>
                            <li>Mike Thomas : Wow im so excited </li>
                            <li>Mike Thomas : Wow im so excited </li>
                            <li>Mike Thomas : Wow im so excited </li>
                            <li>Mike Thomas : Wow im so excited </li>


                        </ul>
                        <textarea />
                        <button>Submit</button>

                    </ScrollArea>


                </Row>
            </Container>
        );
    }
}

export default EventForumSingle;