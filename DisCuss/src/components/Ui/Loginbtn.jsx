import React from 'react';
import styled from 'styled-components';

const Loadingbtn = () => {
  return (
    <StyledWrapper>
      <div className="btn btn-primary">
        <span className="btn-txt">Sign In</span>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn {
    margin: 0.5rem;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    border: none;
    font-weight: 600;
    cursor: pointer;
  }

  .btn kbd {
    margin: 0.25rem;
    padding: 0.125rem 0.5rem;
    border-radius: 0.25rem;
  }

  .btn-primary {
    background: linear-gradient(#1f5afe, #0f4cf5);
    color: white;
    box-shadow: inset 0pt 4pt 3pt -2pt #386fff, 0pt 4pt 5pt -3pt #0009;
    border-bottom: 2pt solid #083acd;
    transition: all 0.5s ease;
  }

  .btn-primary:hover {
    border-bottom: 4pt solid #083acd;
    translate: 0pt -1pt;
  }

  .btn-primary:active {
    box-shadow: inset 0pt 4pt 3pt -2pt #386fff, 0pt 4pt 5pt -3pt #0000;
    border-bottom: 1pt solid #083acd;
    translate: 0pt 0pt;
  }

  .btn-primary kbd {
    background-color: #3e6eff;
    box-shadow: inset 0pt -3pt 3pt -2pt #1f54f0, inset 0pt 3pt 3pt -2pt #658dff,
      0pt 2pt 2pt -2pt #0005, 0pt 0pt 0pt 2pt #0d47f0;
  }

  .btn-base {
    background: #386fff;
  }`;

export default Loadingbtn;
