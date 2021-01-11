import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { useDropzone } from 'react-dropzone'

const pairs = [{
  csv: 'json'
},{
  json:'csv'
}]

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
    justify-items:center;
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
      box-shadow: 1px 3px rgb(156,156,156);
      transition: 0.2s;
      outline:none;
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
      margin-bottom: 40px;
    }

    button:focus {


    }
    button:active {
      box-shadow: 1px 1px rgb(156,156,156);
      transform: translateY(2px);
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

  @media screen and (max-width: 600px) {
    form {
      grid-template-areas: 'from'
                          'to'
                        'file'
                        'button';
    gap: 2rem 5rem;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr auto auto;
    }
  }
`

const Convertor = () => {
  const [file, setFile] = useState()
  const [from,setFrom] = useState('default')
  const [to,setTo] = useState('default')

  const onDrop = useCallback((files) => {
    const [uploadedFile] = files
    setFile(uploadedFile)

  }, [])
  const { getRootProps, getInputProps, rootRef } = useDropzone({ onDrop })

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <StyledConvertor className="shadow p-3 mb-5">
      <form onSubmit={handleSubmit}>
        <div className="from">
          <label htmlFor="from">From</label>
          <div className="select">
            <select value={from} onChange={(e) => setFrom(e.target.value)} id="from">
              {
                
              }
              <option value="default">Select FIle Type</option>
            </select>
   
          </div>
        </div>
        <div className="to">
          <label htmlFor="to">To</label>
          <div className="select">
            <select value={to} onChange={(e) => setTo(e.target.value)}  id="to">
            {

            }
            <option value="default">Select FIle Type</option>
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
        <button className="">CONVERT</button>
      </form>
    </StyledConvertor>
  )
}

export default Convertor