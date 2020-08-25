import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';

import styled from 'styled-components';

import CharacterPage from '../pages/characterPage';
import BooksPage from '../pages/booksPage';
import HousesPage from '../pages/housesPage';

import BookItem from '../pages/bookItem';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import GotService from '../../services/gotService';
// import ItemList from '../itemList';
// import CharDetails from '../charDetails';





export default class App extends Component{

    getData = new GotService();

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
        // const itemList = (
        //     <Col md='6'>
        //         <ItemList
        //         onCharSelected={this.onCharSelected}
        //         itemData={this.getData.getAllBooks}
        //         renderItem={(item) => `${item.name} (id: ${item.id})`} />
        //     </Col>
        // )
        // const charDetail = (
        //     <Col md='6'>
        //         <CharDetails
        //         itemId={this.state.selectedChar} />
        //     </Col>
        // )
    

        return (
            <Router>
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
                    <Route path='/characters' component={CharacterPage} />
                    <Route path='/books' exact component={BooksPage} />
                    <Route path='/houses' component={HousesPage} />
                    <Route path='/books/:id' render={
                        ({match}) => { 
                            const {id} = match.params;
                            return <BookItem 
                                bookId={id}
                            />}
                    } />



                </Container>
            </>
            </Router>
        );
    }
};



