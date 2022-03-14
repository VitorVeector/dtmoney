import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    background: #e7e9ee;
    border: 1px solid #d7d7d7;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      // Placeholder do Input
      color: var(--text-body);
    }

    & + input {
      // Todo elemento, menos o primeiro
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 0.15rem;
    height: 4rem;
    background: var(--green-light);
    border-radius: 0.25rem;
    color: #fff;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: filter 0.2s;
    &:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    background: transparent;
    border: none;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.6);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
    isActive: boolean;
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background-color: ${props => props.isActive ? '#ccc' : 'transparent' };

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s;

  &:hover {
    border-color: ${darken(0.3, "#d7d7d7")};
  }

  img {
    height: 20px;
    width: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;
