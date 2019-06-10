import React from 'react';
import { capFirstLetter } from 'utils/helpers';
import DropDownWrap from './DropDownWrap';

const DocumentsDropdown = rowInfo => (
  <DropDownWrap>
    {rowInfo &&
      rowInfo.original.documents.map(item => (
        <a
          key={Math.random()}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.type === 'billOfLading'
            ? 'BOL / POD'
            : capFirstLetter(item.type)}
        </a>
      ))}
  </DropDownWrap>
);

export default DocumentsDropdown;
