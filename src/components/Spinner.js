import React from 'react'
// import loading from './loading.gif'
function Spinner(){
    return (
      <div className='text-center my-3'>
        <button className="btn btn-primary" type="button" disabled>
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>&#9;Loading
        </button>
      </div>
    )
}

export default Spinner
