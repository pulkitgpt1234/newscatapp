import React from 'react'

function NewsItem(props){
    let {description,title,imageUrl,newsUrl,author,date,source,mode}=props; // props can be catched in variables like this.
    return (
      <div className={`d-flex justify-content-center my-3`}>
        <div className="card" style={{border:"1px solid"}}>
          <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}> 
              <span className="badge rounded-pill bg-dark">{source}</span>
          </div>
        {/* read about the styling of span badge */}
        <img src={imageUrl} className="card-img-top" style={{height:"25vh"}} alt="..."/>
        <div className={`card-body bg-${mode==='light'?"light":"dark"}`}>
            <h5 className={`card-title text-${mode==='light'?"dark":"light"}`}>{title}...</h5>
            <p className={`card-text text-${mode==='light'?"dark":"light"}`}>{description}...</p>
            <p className="card-text"><small className={`text-${mode==='light'?"dark":"light"}`}>By : {author?author:"Unknown"} on {new Date(date).toUTCString()}</small></p>
            <a href={newsUrl} target="_blank" rel='noopener noreferrer' className={`btn btn-${mode==='light'?"dark":"primary"}`}>Read More</a>
        </div>
        </div>
      </div>
    )
  }
//read about z Index and left property used in badge
export default NewsItem
