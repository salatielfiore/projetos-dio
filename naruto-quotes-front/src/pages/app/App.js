import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Quotes } from '../../components';
import narutoImg from '../../images/naruto.png';
import jutsoSound from '../../sounds/jutso.mp3';
import { getQuote } from '../../services'

const audio = new Audio(jutsoSound);

export function App() {

  const isMounted = useRef(true);

  const [quoteState, setQuoteState] = useState({
    quote: 'loading Quote...',
    speaker: 'loading Speaker...'
  });

  const onClickHandler = async () => {
    const quote = await getQuote();

    if(isMounted.current){
      audio.play();
      setQuoteState(quote);
    }
    
  }

  useEffect(() => {
    onClickHandler();

    return () => {
      isMounted.current = false;
    };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Content>
      <Quotes {...quoteState}  onClick={onClickHandler} />
      <NarutoImg src={narutoImg} alt="Naruto img" />
    </Content>
  );
  
}

const Content =  styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;

