import dynamic from 'next/dynamic';
import React, { FC, useState } from 'react';
import { TrixEditor } from 'react-trix';

interface Props {
  id: string;
  content: string;
}

const getState = (id: string, content: string): string => {
  return localStorage.getItem(id) || content;
};

const Editor: FC<Props> = ({ id, content }) => {
  require('trix');
  require('trix/dist/trix.css');

  const [state, setState] = useState(getState(id, content));

  const onChange = (state): void => {
    localStorage.setItem(id, state);
    setState(state);
  };

  return <TrixEditor value={state} onChange={onChange} mergeTags={[]} />;
};

export default dynamic(() => Promise.resolve(Editor), { ssr: false });
