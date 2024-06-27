import React from 'react'

const Header = ({ toggleModal, nbOfAds }) => {
  return (
    <header className='header'>
        <div className='container'>
            <h3>Ad List ({nbOfAds})</h3>
            <button onClick={() => toggleModal(true)} className='btn'>
                <i className='bi bi-plus-square'></i> Add New Ad
            </button>
        </div>
    </header>
  )
}

export default Header