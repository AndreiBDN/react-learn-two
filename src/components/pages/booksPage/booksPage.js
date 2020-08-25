import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../../itemList';
import ErrMessage from '../../error';
import GotService from '../../../services/gotService';
import CharDetails, {Field} from '../../charDetails'

import {withRouter} from 'react-router-dom'


class BooksPage extends Component {

    getData = new GotService();


    state = {

        error: false
    }

    componentDidCatch(){
        this.setState({
            error: true
        })
    }
    onItemSelected = (id) => {
        this.setState({selectedItem:id})
    }

    render(){
        if(this.state.error){
            return <ErrMessage />
        }
        return(
            <Row>
                <Col md='6'>
                    <ItemList
                    onItemSelected={(itemId) => {
                        this.props.history.push(`/books/${itemId}`)
                    }}
                    itemData={this.getData.getAllBooks}
                    renderItem={(item) => `${item.name}`} />
                </Col>
                <Col md='6'>
                    <CharDetails itemId={this.state.selectedItem}
                        gData={this.getData.getBook}>
                        < Field  field='name' label='Name'/>
                        < Field  field='publisher' label='Publisher'/>
                        < Field  field='released' label='Released'/>
                    </CharDetails>
                </Col>
            </Row>
        )
    }
}

export default withRouter(BooksPage)