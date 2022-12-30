import './App.css';

import api                          from './api/catApi'
import CatCard                      from './components/CatCard.jsx'
import { useEffect, useState }      from 'react';
import { Box }                      from '@mui/material';
import { useForm }                  from "react-hook-form";
import SearchIcon                   from '@mui/icons-material/Search';
import Header                       from './layouts/Header';
import InputSearch                  from './components/InputSearch';
import SearchButton                 from './components/SearchButton';
import Loading                      from './components/Loading';

function App() {

  const [data,setData]                = useState([]);
  const [dataSearch,setDataSearch]    = useState([]);
  const [limit,setLimit]              = useState(10);
  const [checkSearch,setCheckSearch]  = useState(true)
  const [noData,setNoData]            = useState(false);
  const [loading,setLoading]          = useState(false);

  const {register, handleSubmit} = useForm();


  // =========== api Search ============
  const getSearch = async (alphabet) =>{
    try{
      
      let url = `/breeds/search?q=${alphabet}`;
      const response      = await api.get(url);
      const responseData  = response.data;
      console.log(responseData.length);

      setDataSearch(responseData);
      setLoading(false)

    
      return dataSearch
    }catch (err) {
      console.log(err);
    }
  } 

  
  // ============= api Cat Limit ==============
  const getApi = async (limit) => {
    try{
      let url = `/breeds?limit=${limit}&page=0`
      const response = await api.get(url);
      return response.data;

    }catch ( err) {
      console.log(err);
    }
  }


  // ============= Data Submit Searching =============
  const onSubmit = (dataSubmit) => {
    console.log(dataSubmit.alphabet);

    if (dataSubmit.alphabet === "") {
      setCheckSearch(true)
        
    }else{
      getSearch(dataSubmit.alphabet);
      setCheckSearch(false)

    }
  }; 


  // ============= window scroll ============
  window.onscroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      if(!noData) {
        loadUserList(limit)
      }
    }
  }


  useEffect ( () => {
    loadUserList(limit)
  },[])

  // ============= load new limit ===========
  const loadUserList = (limit) => {
    setLoading(true);
        setTimeout(() => {
          getApi(limit)
          .then((res) => {
            const newLimit  = limit + 10;
            const newList   = [...res];
            setData(newList)
            setLimit(newLimit)
            console.log(res);
            if (res.length === 67) {
              setNoData(true)
              setLoading(false)
            }
          })
        }, 500)
      

  }

  const styleButton = {
    width     : '50%',
    marginTop : '2%'
  }

  const loadingStyle = {
    display : 'flex',justifyContent : 'center',marginTop : '2%'
  }

  return (

    <div className="App padding-fix">

      {/* ================= Logo ================ */}
        <Header/>


      {/* ============= Form Submit ================ */}
          <form onSubmit={handleSubmit(onSubmit)}>
              <Box
                className='input-search'
                sx = {{
                    width     : '50%',
                    margin    : 'auto',
                    
                }}
              >
                  <InputSearch 
                    name      = "alphabet"
                    register  = {register}
                  />
              </Box>

              <Box 
                sx= {{ 
                    display         : 'flex',
                    justifyContent  : 'center',
                }}
              
              >
                <SearchButton
                  type  = "submit"
                  value = {<SearchIcon/>}
                  style = {styleButton}
                />
              </Box>
          </form>

        <Box style={{ marginTop : '5%' }}>
          {
            checkSearch ? 
            <CatCard data = {data} /> : <CatCard data={dataSearch}/>
          }
          
        </Box>
        
      {
        loading ?  
            <Box sx={loadingStyle}>
              <Loading/>
            </Box> 
          : ""
      }

      {
        noData ? <h4 style={{ textAlign : 'center' }}>No Data</h4> : ""
      }
    </div>
  );
}

export default App;
