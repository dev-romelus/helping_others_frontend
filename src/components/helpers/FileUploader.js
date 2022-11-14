import React, { useRef } from 'react';
import styled from 'styled-components';

// import Button from './Button';

const FileUploader = ({ className, label, onChange }) => {
    const hiddenFileInput = useRef(null);
    const handleClick = () => hiddenFileInput.current.click();
    const handleImageChange = (e) => onChange(e.target.files[0]);

    return (
        <div className={className} type='button' onClick={handleClick}>
            <span>{label}</span>
            <input ref={hiddenFileInput} type='file' id='file' accept='image/*' style={{ display:'none' }} onChange={handleImageChange} />
        </div>
    )
}

export default styled(FileUploader)`
    height: 150px;
    width: 150px;
    background-color: #F7F9FC;
    display: flex;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
    border: 1px solid #D1DAE6;
    overflow: hidden;
    border-radius: 4px;
    border-width: 2px;
    border-style: dashed;
    cursor: pointer;
`;