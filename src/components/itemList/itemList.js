import React, {Component} from 'react';
import styled from 'styled-components';
import GotService from '../../services/gotService';
import Spinner from '../../spinner';
import ErrMessage from '../error';

export default class ItemList extends Component {

    constructor(){
        super()
        this.state = {
            charList: null,
            error: false
        }
    }

    getData = new GotService();

   
    componentDidCatch(){
        this.setState({
            error: true
        })
    }

    componentDidMount(){

        this.getData.getAllCharacters()
            .then((charList) => {
                this.setState({
                    charList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            const id = item.id
            return (
                <li
                    key={item.id} 
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected(id)}>
                    {item.name}
                </li>
            )
        })
    }

    render() {

        const ItemList = styled.ul`
            cursor: pointer;
        `;

        // const ListItem =styled.li`
        // transition: .5s;
        // :hover{
        //     background-color: #b7c6cc;
        // }
        // `;

        const {charList, error} = this.state;

        if (error){
            return <ErrMessage />
        }
        if(!charList){
            return <Spinner />
        }

        const items = this.renderItems(charList)

        return (
            <ItemList className="item-list list-group">
                {items}

            </ItemList>
        );
    }
}