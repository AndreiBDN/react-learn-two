import React, {Component} from 'react';
import styled from 'styled-components';


export default class ItemList extends Component {

    render() {

        const ItemList = styled.ul`
            cursor: pointer;
        `;

        const ListItem =styled.li`
        transition: .5s;
        :hover{
            background-color: #b7c6cc;
        }
        `
        return (
            <ItemList className="item-list list-group">
                <ListItem className="list-group-item">
                    John Snow
                </ListItem>
                <ListItem className="list-group-item">
                    Brandon Stark
                </ListItem>
                <ListItem className="list-group-item">
                    Geremy
                </ListItem>
            </ItemList>
        );
    }
}