import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

const HeaderTitle = styled.h3`
    font-size: 24px;
    color: #fff;
    margin: 0;
`;

const HeaderLinks = styled.ul`
    display: flex;
    margin: 0;
    align-items: center;
    color: #fff;
    list-style-type: none;
    li {
        margin-right: 20px;
        font-size: 18px;
    }
`;

const HeaderLink = styled.a`
position: relative;
    :after{
        content:'';
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background-color: #fff;
        transition: .5s;
    }
    :hover:after{
        left: 0;
        width: 100%;
    }

`

const Header = () => {
    return (
        <HeaderBlock>
            <HeaderTitle>
                <a href="#">
                Game of Thrones DB
                </a>
            </HeaderTitle>
            <HeaderLinks>
                <li>
                    <HeaderLink href="#">Characters</HeaderLink>
                </li>
                <li>
                    <HeaderLink href="#">Houses</HeaderLink>
                </li>
                <li>
                    <HeaderLink href="#">Books</HeaderLink>   
                </li>
            </HeaderLinks>
        </HeaderBlock>
    );
};

export default Header;