import React from 'react';
import uuid from 'uuid';
import { capFirstLetter } from 'utils/helpers';
import DropDownWrap from './DropDownWrap';

const DocumentsDropdown = rowInfo => (
  <DropDownWrap>
    {rowInfo &&
      rowInfo.original.documents.map(item => (
        <a
          key={uuid.v4()}
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
