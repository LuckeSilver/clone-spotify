import styled from "styled-components";

export const Content = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #282828;
  padding: 12px;

  img {
    width: 15px;
    height: 15px;
  }

  img.play {
    width: 25px;
    height: 25px;
  }
`;

export const Current = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 48px;
    height: 48px;
  }

  div {
    margin-left: 12px;
    display: flex;
    flex-direction: column;

    span {
      font-size: 13px;
      color: #fff;
    }

    small {
      font-size: 11px;
      color: #b3b3b3;
      margin-top: 5px;
    }
  }
`;

export const Playng = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Controls = styled.div`
  button {
    background: transparent;
    border: 0;
    margin: 0 15px;
  }
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  span {
    font-size: 11px;
    color: #b3b3b3;
  }
`;

export const ProgressSlider = styled.div`
  width: 500px;
  margin: 0 15px;
`;

export const Volume = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  margin-right: 20px;

  img {
    margin-right: 5px;
  }
`;
