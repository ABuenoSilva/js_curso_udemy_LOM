import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    text-align: center;
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.font.sizes.small};
    margin: ${({ theme }) => theme.spacings.medium};
  `}
`;
