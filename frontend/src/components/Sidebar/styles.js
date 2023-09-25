import styled from 'styled-components';

export const Container = styled.div`
  background-color: #2074d4;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 300px;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;
  z-index: 999; // faz a sidebar ficar em cima do conteudo do site

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 1rem; //ajuste do ~X~
    margin-left: 1.3rem; //ajuste do ~X~
    cursor: pointer;
    left: 0; //ajuste do ~X~
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;