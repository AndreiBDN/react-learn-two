import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../../itemList';
import CharDetails, {Field} from '../../charDetails';
import ErrMessage from '../../error';
import GotService from '../../../services/gotService';


export default class HousesPage extends Component {

    getData = new GotService();


    state = {
        selectedItem: 362,
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
                onItemSelected={this.onItemSelected}
                itemData={this.getData.getAllHouses}
                renderItem={(item) => `${item.name}`} />
            </Col>
            <Col md='6'>
                <CharDetails itemId={this.state.selectedItem}
                    gData={this.getData.getHouse}>
                    < Field  field='name' label='Name'/>
                    < Field  field='region' label='Region'/>
                    < Field  field='titles' label='Titles'/>
                    < Field  field='words' label='Words'/>
                    < Field  field='ancestralWeapons' label='Weapons'/>
                </CharDetails>
            </Col>
        </Row>
        )
    }
}