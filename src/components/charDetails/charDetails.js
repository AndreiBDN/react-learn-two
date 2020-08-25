import React, {Component} from 'react';
import './charDetails.css';
import GotService from '../../services/gotService';
import styled from 'styled-components';
export default class CharDetails extends Component {

    getData = new GotService();

    state = {
        char: null
    }

    updateChar() {
        const {charId} = this.props

        if(!charId){
            return
        }

        this.getData.getCharacter(charId)
            .then((char) => {
                this.setState({char})
            })
    }

    componentDidMount(){
        this.updateChar();
    }
    componentDidUpdate(prevProps){
        if(this.props.charId !== prevProps){
            this.updateChar()
        }
    }

    render() {

        const ErrSpan = styled.span`
            color: #fff;
            font-size: 20px;
        `

        if(!this.state.char){
            return <ErrSpan>Please select character</ErrSpan>
        }

        const {name, gender, born, died, culture} = this.state.char;
        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}