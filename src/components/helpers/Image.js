import React from 'react'
import styled from 'styled-components'

const Image = ({ className, src, alt }) => {
  return <img className={className} src={src} alt={alt} />
}

export default styled(Image)`
  width : 100%;
  height : auto;
  border-radius: 2px;
`;