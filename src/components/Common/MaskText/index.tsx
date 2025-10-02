'use client';
import { ReactNode } from 'react';
import { Body, LineMask } from './styles';

const MaskText = ({
  phrases,
  tag,
}: {
  phrases: Array<string | ReactNode>;
  tag: string;
}) => {
  return (
    <Body>
      {phrases.map((phrase, index) => {
        return (
          <LineMask key={index}>
            {tag === 'h1' ? (
              <h1>{phrase}</h1>
            ) : tag === 'h2' ? (
              <h2>{phrase}</h2>
            ) : tag === 'h3' ? (
              <h3>{phrase}</h3>
            ) : (
              <p>{phrase}</p>
            )}
          </LineMask>
        );
      })}
    </Body>
  );
};

export default MaskText;
