import React from 'react';
import { useState, useEffect } from 'react';
import './index.scss';

type Props = {
  text: string;
  cutSize: number | 100;
  wrapperClass?: string;
  readMoretext?: string;
  readLesstext?: string;
  ellipsis?: string;
  // byLines?: boolean | false;
};

export default function ReadMoreLess({
  text,
  cutSize,
  wrapperClass,
  readMoretext,
  readLesstext,
  ellipsis,
}: Props) {
  const [element, setelement] = useState<HTMLElement | null>(null);
  const [tempCutsize, settempCutsize] = useState(cutSize);

  const renderText = () => {
    // If passed text length is greater than cut size show
    // read-more button
    if (String(text).length > tempCutsize) {
      return (
        <>
          {String(text).substring(0, tempCutsize)}
          {ellipsis || '...'}
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

  useEffect(() => {
    if (element) {
      console.log(element.clientHeight);
    }
  }, [element]);
  const getWrapper = () => {
    const innerClampElement = React.createElement(
      'div',
      {
        ref: (e) => {
          setelement(e);
        },
        className: `${wrapperClass}`,
      },
      renderText(),
    );
    return innerClampElement;
  };

  return <>{getWrapper()}</>;
}
