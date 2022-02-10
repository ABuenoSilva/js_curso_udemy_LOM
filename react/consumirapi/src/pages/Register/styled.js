import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Paragrafo = styled.p``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin-top: 5px;

    &:focus {
      box-shadow: 5px 5px 20px -5px ${colors.primaryColor};
    }
  }
`;
