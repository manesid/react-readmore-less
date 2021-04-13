import React from 'react';
import { useState } from 'react';
import './index.scss';

type Props = {
  text: string;
  cutSize: number | 100;
  wrapperClass?: string;
  readMoretext?: string;
  readLesstext?: string;
};

export default function ReadMoreLess({
  text,
  cutSize,
  wrapperClass,
  readMoretext,
  readLesstext,
}: Props) {
  const [tempCutsize, settempCutsize] = useState(cutSize);
  const renderText = () => {
    // If passed text length is greater than cut sizd show
    // read-more button
    if (String(text).length > tempCutsize) {
      return (
        <>
          {String(text).substring(0, tempCutsize)}...
          <span
            className="read-more"
            onClick={() => {
              settempCutsize(String(text).length + 1);
            }}
          >
            {readMoretext || 'Read More'}
          </span>
        </>
      );
    } else {
      return (
        <>
          {text}
          <span
            className="read-less"
            onClick={() => {
              settempCutsize(cutSize);
            }}
          >
            {readLesstext || 'Read less'}
          </span>
        </>
      );
    }
  };
  return <div className={`${wrapperClass}`}>{renderText()}</div>;
}
