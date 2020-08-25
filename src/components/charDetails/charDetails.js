import React, {Component} from 'react';
import './charDetails.css';
import styled from 'styled-components';

const Field = ({item, field, label}) => {
    return(
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {Field}
export default class CharDetails extends Component {


    state = {
        item: null
    }

    updateChar() {
        const {itemId, gData} = this.props

        if(!itemId){
            return
        }

        gData(itemId)
            .then((item) => {
                this.setState({item})
            })
    }

    componentDidMount(){
        this.updateChar();
    }
    componentDidUpdate(prevProps){
        if(this.props.itemId !== prevProps){
            this.updateChar()
        }
    }

    render() {

        const ErrSpan = styled.span`
            color: #fff;
            font-size: 20px;
        `

        if(!this.state.item){
            return <ErrSpan>Please select character</ErrSpan>
        }

        const {item} = this.state

        const {name} = item;
        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </div>
        );
    }
}