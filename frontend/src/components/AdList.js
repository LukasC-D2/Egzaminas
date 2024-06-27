import React from 'react'
import Ad from './Ad'

const AdList = ({ data, currentPage, getAllAds }) => {
    return (
        <main className='main'>
            {data?.content?.length === 0 && <div>No Ads. Please add a new ad</div>}

            <ul>
                {data?.content?.length > 0 && data.content.map(ad => <Ad ad={ad} key={ad.id} />)}
            </ul>

            {data?.content?.length > 0 && data?.totalPages > 1 &&
            <div className='pagination'>
                <a onClick={() => getAllAds(currentPage - 1)} className={0 === currentPage ? 'disabled' : ''}>&laquo;</a>

                { data && [...Array(data.totalPages).keys()].map((page, index) => 
                    <a onClick={() => getAllAds(page)} className={currentPage === page ? 'active' : ''} key={page}>{page + 1}</a>)}


                <a onClick={() => getAllAds(currentPage + 1)} className={data.totalPages === currentPage + 1 ? 'disabled' : ''}>&raquo;</a>
            </div>            
            }

        </main>
    )
}

export default AdList