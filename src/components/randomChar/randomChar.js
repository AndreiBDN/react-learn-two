import React, {Component} from 'react';

import styled from 'styled-components';

export default class RandomChar extends Component {

    render() {

        const RandomBlock = styled.div`
        background-color: #fff;
        padding: 25px 25px 15px 25px;
        margin-bottom: 40px;
        `;

        const RandomBlockTitle = styled.h4`
        margin-bottom: 20px;
        text-align: center;
        `;

        const ItemName = styled.span`
        font-weight: bold;
        `


        return (
            <RandomBlock className="rounded">
                <RandomBlockTitle>Random Character: John</RandomBlockTitle>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <ItemName >Gender </ItemName>
                        <span>male</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <ItemName >Born </ItemName>
                        <span>11.03.1039</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <ItemName >Died </ItemName>
                        <span>13.09.1089</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <ItemName >Culture </ItemName>
                        <span>Anarchy</span>
                    </li>
                </ul>
            </RandomBlock>
        );
    }
}
