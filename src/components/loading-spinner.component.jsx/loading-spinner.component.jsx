import React from 'react';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';


const override = css`
  display: block;
  color: red;
  margin: 0 auto;
  border-color: red;
`;

function LoadingSpinner({ loading }) {
    return (
        <div className="sweet-loading">
            <ClipLoader css={override} size={150} color={"#123abc"} loading={loading} />
        </div>
    );
}

export default LoadingSpinner;
