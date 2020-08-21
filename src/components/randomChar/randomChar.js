import React, {Component} from 'react';
import GotService from '../../services/gotService';
import styled from 'styled-components';
import Spinner from '../../spinner';
import ErrMessage from '../error';

export default class RandomChar extends Component {

    constructor(props){
        super(props);
        this.state = {
            char:{},
            loading: true,
            error: false
        }

        setInterval(()=>{
            this.changeChar();
        }, 5000)
        this.changeChar();
    }

    getData = new GotService();

    onCharLoad = (char) => {
        this.setState({char, loading: false})
    }

    onError =()=>{
        this.setState({error:true})
    }

    changeChar(){
        let id = Math.floor(Math.random()*150 + 30)
        this.getData.getCharacter(id)
            .then(this.onCharLoad)
            .catch(this.onError)
       
    }

    render() {
        const RandomBlock = styled.div`
        background-color: #fff;
        padding: 25px 25px 15px 25px;
        margin-bottom: 40px;
        `;

        
        const {char, loading, error} = this.state;

        const err = error ? <ErrMessage/> : null;

        const spinner = (loading && !error) ? <Spinner/> : null

        const content = !(loading || error) ? <View char={char}/> : null

        return (
            <>
            <RandomBlock className="rounded">
                {err}
                {spinner}
                {content}
            </RandomBlock>
            </>
        );
    }
}

const View = ({char}) => {

    const {name, gender, born, died, culture} = char;
    const RandomBlockTitle = styled.h4`
        margin-bottom: 20px;
        text-align: center;
        `;

        const ItemName = styled.span`
        font-weight: bold;
        `
    return (
        <>
         <RandomBlockTitle>Random Character: {name}</RandomBlockTitle>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <ItemName >Gender </ItemName>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <ItemName >Born </ItemName>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <ItemName >Died </ItemName>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <ItemName >Culture </ItemName>
                         <span>{culture}</span>
                    </li>
                </ul>
        </>
    )
}
