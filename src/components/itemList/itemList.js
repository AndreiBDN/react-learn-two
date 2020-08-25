import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from '../../spinner';
import ErrMessage from '../error';

export default class ItemList extends Component {

    constructor(props){
        super(props)
        this.state = {
            itemList: null,
            error: false
        }
    }


   
    componentDidCatch(){
        this.setState({
            error: true
        })
    }

    componentDidMount(){

        const {itemData} = this.props;

        itemData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const id = item.id;
            const label = this.props.renderItem(item);
            return (
                <li
                    key={id} 
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    }

    render() {

        const ItemList = styled.ul`
            cursor: pointer;
        `;

        const {itemList, error} = this.state;

        if (error){
            return <ErrMessage />
        }
        if(!itemList){
            return <Spinner />
        }

        const items = this.renderItems(itemList)

        return (
            <ItemList className="item-list list-group">
                {items}

            </ItemList>
        );
    }
}