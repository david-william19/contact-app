import styled from '@emotion/styled';
import React from 'react';

interface InputProps {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
  value?: string;
  required?: boolean;
  autoFocus?: boolean;
  autoComplete?: string;
}

const CustomInput = styled.input`
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  height: 40px;
`;

const Input = (props: InputProps) => {
  return <CustomInput {...props} />;
};

export default Input;
