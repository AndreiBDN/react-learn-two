import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage';
import styled from 'styled-components';


export default class App extends Component{

    constructor(){
        super();

        this.state={
            close: false,
        }
    }

    onClickClose = () => {
           return(
            this.setState({
                close : !this.state.close
            })

           )
    
    }

 
    render(){

        const {close} = this.state;

       
        const closeChar = 'Close random character';
        const showChar = 'Show random character';

        const toggleButtonName = close ? closeChar : showChar;
        let showrandomChar = close ? <RandomChar/> : null


        const CloseButton = styled.button`
            border: none;
            background-color: #fff;
            border-radius: 5px;
            color: #333333;
            padding: 1rem;
            margin-bottom: 2rem;
        `
    

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                        <CloseButton 
                            onClick={this.onClickClose}
                        >{toggleButtonName}
                        </CloseButton>
                            {showrandomChar}
                        </Col>
                    </Row>
                   <CharacterPage />
                </Container>
            </>
        );
    }
};



