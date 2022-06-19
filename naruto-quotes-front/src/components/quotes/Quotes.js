import React, { Component } from 'react';
import styled from 'styled-components';
import { string, func } from 'prop-types';
import { Button } from '../../components/'

export class Quotes extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Wrapper>
                <Quote>{this.props.quote}</Quote>
                <Speaker>- {this.props.speaker}</Speaker>
                <Button onClick={this.props.onClick} children="Quote No Jutsu" />
            </Wrapper>
        );
    }
}

Quotes.propTypes = {
    quote: string,
    speaker: string,
    onUpdate: func
}


const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Quote = styled.p`
    font-size: 2em;
    margin: 0;

`;

const Speaker = styled(Quote)`
    text-align: right;
    margin-bottom: 50px;
`;