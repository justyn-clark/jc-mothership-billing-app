import React from 'react';
import PropTypes from 'prop-types';
import ArrowDown from 'components/UI/UI.ArrowDown';
import DropDown from 'components/DropDown';
import Wrapper from './Wrapper';

const propTypes = {
  documents: PropTypes.array,
};

const Documents = props => {
  return (
    <Wrapper>
      <p>View Docs</p>
      <ArrowDown
        color="black"
        onClick={() => console.log('toggle user menu')}
      />
    </Wrapper>
  );
};

Documents.propTypes = propTypes;
export default Documents;
