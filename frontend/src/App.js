import { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './components/Header';
import AdList from './components/AdList';
import { getAds, saveAd } from './api/AdService';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdDetail from './components/AdDetail';

function App() {

  const modalRef = useRef();
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [values, setValues] = useState({
    id: '',
    title: '',
    description: '',
    category: ''
  });


  const getAllAds = async (page = 0, size = 2) => {
    try {
      setCurrentPage(page);
      const { data } = await getAds(page, size);
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const handleNewAd = async (event) => {
    event.preventDefault();
    try {
      const { data } = await saveAd(values);
      const formData = new FormData();
      formData.append('id', data.id);   
      setValues({
        id: '',
        title: '',
        description: '',
        category: ''
      })
      getAllAds();
    } catch (error) {
      console.log(error);
    }
  };

  const updateAd = async (ad) => { 
    try {
      const { data } = await saveAd(ad);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
   };


  const toggleModal = show => show ? modalRef.current.showModal() : modalRef.current.close();

  useEffect(() => {
    getAllAds();
  }, []);

  return (
    <>
    <Header toggleModal={toggleModal} nbOfAds={data.totalElements} />
      <main className='main'>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Navigate to={"/ads"} />} />
            <Route path="/ads" element={<AdList data={data} currentPage={currentPage} getAllAds={getAllAds} />} />
            <Route path="/ads/:id" element={<AdDetail updateAd={updateAd} />} />
          </Routes>
        </div>
      </main>

      <dialog ref={modalRef} className="modal" id="modal">
        <div className="modal__header">
          <h3>New Ad</h3>
          <i onClick={() => toggleModal(false)} className="bi bi-x-lg"></i>
        </div>
        <div className="divider"></div>
        <div className="modal__body">
          <form onSubmit={handleNewAd}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Title</span>
                <input type="text" value={values.title} onChange={onChange} name='title' required />
              </div>
              <div className="input-box">
                <span className="details">Description</span>
                <input type="text" value={values.description} onChange={onChange} name='description' required />
              </div>
              <div className="input-box">
                <span className="details">Category</span>
                <input type="text" value={values.category} onChange={onChange} name='category' required />
              </div>
            </div>
            <div className="form_footer">
              <button onClick={() => toggleModal(false)} type='button' className="btn btn-danger">Cancel</button>
              <button type='submit' className="btn">Save</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default App;
