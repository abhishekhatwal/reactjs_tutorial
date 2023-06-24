import React from 'react'

const Searchresult = (prop) => {
  return (
    <div>
      <img src={`https://source.unsplash.com/600x400/?${prop.serach}`} alt="img" style={{width:"200px",height:"200px"}} />
    </div>
  )
}

export default Searchresult;
