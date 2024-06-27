import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getAd } from '../api/AdService';

const AdDetail = ({ updateAd }) => {
    const [ad, setAd] = useState({
        id: '',
        title: '',
        description: '',
        category: ''
    });

    const { id } = useParams();

    const fetchAd = async (id) => {
        try {
            const { data } = await getAd(id);
            setAd(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const onChange = (event) => {
        setAd({ ...ad, [event.target.name]: event.target.value });
      }

      const onUpdateAd = async (event) => {
        event.preventDefault();
        await updateAd(ad);
        fetchAd(id);
    }
    

    useEffect(() => {
        fetchAd(id);
    }, []);


    return (
        <>
            <Link to={'/'} className='link'><i className='bi bi-arrow-left'></i>Back to list</Link>
            <div className='profile'>
                <div className='profile__details'>
                    <div className='profile_metadata'>
                        <p className='profile__name'>{ad.title}</p>
                    </div>
                </div>
                <div className='profile__settings'>
                    <div>
                        
                        <form onSubmit={onUpdateAd} className="form">
                            <div className="user-details">
                                <input type="hidden" defaultValue={ad.id} name="id" required />
                                <div className="input-box">
                                    <span className="details">Title</span>
                                    <input type="text" value={ad.title} onChange={onChange} name="title" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Description</span>
                                    <input type="text" value={ad.description} onChange={onChange} name="description" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Category</span>
                                    <input type="text" value={ad.category} onChange={onChange} name="category" required />
                                </div>
                            </div>
                            <div className="form_footer">
                                <button type="submit" className="btn">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdDetail