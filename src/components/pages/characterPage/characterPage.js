import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../../itemList';
import CharDetails, {Field} from '../../charDetails';
import ErrMessage from '../../error';
import GotService from '../../../services/gotService';


export default class CharacterPage extends Component {

    getData = new GotService();


    state = {
        selectedItem: 130,
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
                itemData={this.getData.getAllCharacters}
                renderItem={(item) => `${item.name}(${item.gender})`} />
            </Col>
            <Col md='6'>
                <CharDetails itemId={this.state.selectedItem}
                    gData={this.getData.getCharacter}>
                    < Field  field='gender' label='Gender'/>
                    < Field  field='born' label='Born'/>
                    < Field  field='died' label='Died'/>
                    < Field  field='culture' label='Culture'/>

                </CharDetails>
            </Col>
        </Row>
        )
    }
}