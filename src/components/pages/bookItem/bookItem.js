import React, {Component} from 'react';

import GotService from '../../../services/gotService';
import CharDetails, {Field} from '../../charDetails';

export default class BookItem extends Component {
    getData = new GotService();
    state = {
        selectedItem: 1
    }

    render(){
        return(
                

                <CharDetails itemId={this.props.bookId}
                    gData={this.getData.getBook}>
                    < Field  field='name' label='Name'/>
                    < Field  field='publisher' label='Publisher'/>
                    < Field  field='released' label='Released'/>
                </CharDetails>

        )
    }
}


