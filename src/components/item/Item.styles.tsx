import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 100%;

  button {
    border-radius: 0 0 5px 5px;
  }

img {
  max-height: 250px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
}

div {
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  padding: 1rem;
  height: 100%;
}
`;