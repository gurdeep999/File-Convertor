import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { useDropzone } from 'react-dropzone'
import fileService from '../services/files'
import download from 'downloadjs'

const pairs = {
  csv: ['json'],
  json: ['csv'],
  svg: ['png', 'jpg']
}

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
    width: 100%;
    
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
  const [file, setFile] = useState(null)
  const [from, setFrom] = useState('default')
  const [to, setTo] = useState('default')

  const onDrop = useCallback((files) => {
    const [uploadedFile] = files
    setFile(uploadedFile)
  }, [])
  const { getRootProps, getInputProps, rootRef } = useDropzone({ onDrop })

  const downloadFile = async (buffer, fileName, mimetype) => {
    try {
      // if (from === 'svg') {
      //   return download(buffer, fileName, mimetype.returnedFile)
      // }
      return download(buffer, fileName, mimetype)
    } catch (e) {
      console.log('error while downloading file')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (from !== 'default' || to !== 'default') {
        if (file) {
          const formData = new FormData()
          formData.append('file', file)
          formData.append('from', from)
          formData.append('to', to)
          setFile('')
          setFrom('default')
          setTo('default')
          const data = await fileService.upload(formData)
          const buffer = await fileService.download(data.fileName)
          await downloadFile(buffer, data.fileName , data.mimetype)
        } else {
          console.log('please select a file to upload')
        }
      } else {
        console.log('please select file type to be converted and the target type')
      }
    } catch (e) {
      e.response && console.log(e.response.data)
    }
  }

  return (
    <StyledConvertor className="shadow p-3 mb-5">
      <form onSubmit={handleSubmit}>
        <div className="from">
          <label htmlFor="from">From</label>
          <div className="select">
            <select value={from} onChange={(e) => setFrom(e.target.value)} id="from">
              {
                Object.keys(pairs).map(k => (
                  <option key={k} value={k}>{k}</option>
                ))
              }
              <option value="default">Select File Type</option>
            </select>

          </div>
        </div>
        <div className="to">
          <label htmlFor="to">To</label>
          <div className="select">
            <select value={to} onChange={(e) => setTo(e.target.value)} id="to">
              {
                from !== 'default'
                  ? (pairs[from].map(p => <option key={p} value={p}>{p}</option>))
                  : null
              }
              <option value="default">Select File Type</option>
            </select>
            <div className="focus"></div>
          </div>
        </div>
        <div className="file-section">
          <div {...getRootProps({ className: 'drop-zone' })} ref={rootRef}>
            <input {...getInputProps()} />
            {!file
              ? (
                <p><span>Drag 'n' drop some files here, or </span>click to select files</p>
              )
              : (
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