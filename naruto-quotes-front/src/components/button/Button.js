import React, { Component } from 'react';
import { string } from 'prop-types';
import styled from 'styled-components'

export class Button extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <QuoteBtn onClick={this.props.onClick}>{this.props.children}</QuoteBtn>
            </div>
        );
    }
}

Button.propTypes = {
    children: string
}

const QuoteBtn = styled.button`
    background: #DC872C;
    color: #FFFFFF;
    border: none;
    border-radius: 0;
    font-size: 1.5em;
    padding: 10px 20px;
    font-family: 'New Tegomin', serif;
    cursor: pointer;
    box-shadow: #333333 3px 3px;

    &:hover {
        background: #A40000;
    }

`;