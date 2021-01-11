import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { useDropzone } from 'react-dropzone'

const StyledConvertor = styled.div`
background-color: rgb(248,249,249);
border-radius: 15px;
padding: 4rem 5rem;

  form {
    display: grid;
    grid-template-areas: 'from to'
                        'file file'
                        'button button';
    gap: 2rem 5rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 150px 150px auto;
    align-items: center;
    .from {
      grid-area: from;
    }

    .to {
      grid-area: to;
    }

    .file-section {
      grid-area: file;

      .remove-file {
        color: blue;
        display: inline-block;
        margin: 0 10px;
      }
    }
   
    button {
      grid-area: button;
      align-self: center;
      justify-self: center;
      padding: 1.5rem 2rem;
      border-radius: 15px;
      font-weight: 500;
      letter-spacing: 1px;
    }
  }

  .drop-zone {
    margin-bottom: 10px;
    padding: 40px 10px;
    height: inherit;
    border: 2px dashed #e9ebeb;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  
    &:focus {
      outline: none;
    }
  }
`

const Convertor = () => {
  const [file, setFile] = useState()
  const onDrop = useCallback((files) => {
    const [uploadedFile] = files
    setFile(uploadedFile)

  }, [])
  const { getRootProps, getInputProps, rootRef } = useDropzone({ onDrop })
  return (
    <StyledConvertor>
      <form>
        <div className="from">
          <label htmlFor="from">From</label>
          <div className="select">
            <select id="from">
              <option value="Option 1">csv</option>
              <option value="Option 2">json</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 4">Option 4</option>
              <option value="Option 5">Option 5</option>
              <option value="Option length">Option that has too long of a value to fit</option>
            </select>
            <div className="focus"></div>
          </div>
        </div>
        <div className="to">
          <label htmlFor="to">To</label>
          <div className="select">
            <select id="to">
              <option value="Option 1">json</option>
              <option value="Option 2">csv</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 4">Option 4</option>
              <option value="Option 5">Option 5</option>
              <option value="Option length">Option that has too long of a value to fit</option>
            </select>
            <div className="focus"></div>
          </div>
        </div>
        <div className="file-section">
          <div {...getRootProps({ className: 'drop-zone' })} ref={rootRef}>
            <input {...getInputProps()} />
            <p><span>Drag 'n' drop some files here, or </span>click to select files</p>
            {file && (
              <div>
                <strong>Selected File: </strong>
                {file.name}
                <div className="remove-file" onClick={(e) => {
                  setFile(null)
                  e.stopPropagation()
                }}>remove</div>
              </div>
            )
            }
          </div>
        </div>
        <button className="btn-primary">CONVERT</button>
      </form>
    </StyledConvertor>
  )
}

export default Convertor