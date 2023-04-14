import styled from 'styled-components';
import mobileBackground from '../../images/currencies/background-image-mobile.png';
import background from '../../images/currencies/background-image.png';

export const CurrencyWrapper = styled.div`
  background-repeat: no-repeat;
  background-position: bottom;
  @media screen and (max-width: 1279px) {
    width: 280px;
    min-height: 174px;
    border-radius: 30px;

    background-image: url(${mobileBackground});

    background-color: var(--ascent-text-color);

    @media screen and (max-width: 767.9) {
      margin: 0 auto;
    }
  }

  @media screen and (min-width: 1280px) {
    width: 393px;
    min-height: 331px;
    border-radius: 30px;

    background-image: url(${background});

    background-color: var(--ascent-text-color);
  }
`;

export const Table = styled.table`
  font-family: var(--primary-font-family);
  color: var(--primary-white-color);
  text-align: center;

  @media screen and (max-width: 1279px) {
    width: 280px;
  }

  @media screen and (min-width: 1280px) {
    width: 393px;

    thead tr th {
      text-align: center;
    }
  }

  border-collapse: collapse;

  thead th:first-child {
    border-top-left-radius: 30px;
  }

  thead th:last-child {
    border-top-right-radius: 30px;
  }

  thead tr th {
    background-color: var(--ascent-text-color2);
    line-height: 50px;
    width: calc(100% / 3);
  }

  tbody tr td {
    vertical-align: top;
    line-height: 50px;
  }

  tbody tr:last-child td {
    height: 20px;
    line-height: 20px;
    background-color: transparent;
    border: none;
  }
`;
