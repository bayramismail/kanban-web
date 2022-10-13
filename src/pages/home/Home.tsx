import React from 'react'

const Home = ({logOut=()=>{}}) => {
  return (
    <div >Home 
      <button onClick={()=>logOut()}>Çıkış Yap</button>
      </div>
   
  )
}

export default Home