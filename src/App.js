import { useState, useEffect } from "react";
import ProfileList from "./components/ProfileList/ProfileList";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Filter from "./components/Filter/Filter";
import ProfilePage from './components/ProfileList/Profile/ProfilePage/ProfilePage';
import Loader from './components/assets/loader.gif';
import './App.css';

const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  const [location, setLocation] = useState("home");
  const [currentProfile, setCurrentProfile] = useState(null);
  const [filterGenderOption, setGenderOption] = useState('');
  const [filterPaymentOption, setPaymentOption] = useState('');

  
  const profilesPerPage = 20;

  useEffect(() => {
    const fetchProfiles = async () => {
      try{
        setLoading(true);
        const res = await fetch('https://api.enye.tech/v1/challenge/records');
        const json = await res.json();
        setProfiles(json.records.profiles);
        setLoading(false);
      }catch(e){
        setLoading('error');
      }
    }
    fetchProfiles();
  }, []);

  //Loading
  if(loading === true){
    const style = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '97vh',
      overflow: 'none'
    }
    setTimeout(()=>{}, 2000);
    return (<div className="App" style={style}>
      <img src={Loader} alt="loader" id="loader"/>
    </div>)
  }else if(loading === 'error'){
    return (
      <div className="App">
        <h1 className="orange">Error Loading Page</h1>
      </div>
    )
  }

  //Search 
  const searchHandler = (input) => {
    setSearchInput(input);
    setCurrentPage(1);
  }

    //Filter
  const filterGender = (gender) => {
    filteredProfiles = filteredProfiles.filter(profile => profile.Gender === gender)
  }
  const filterPayment = (payment) => {
    filteredProfiles = filteredProfiles.filter(profile => profile.PaymentMethod === payment)
  }


  let filteredProfiles = [...profiles];

  if(searchInput.length !== 0){
    filteredProfiles = filteredProfiles.filter(profile => 
      `${profile.FirstName} ${profile.LastName}`.toLowerCase().includes(searchInput.toLowerCase()) )
  }
  
  if(filterGenderOption.length !== 0){
    filterGender(filterGenderOption);
  }
  if(filterPaymentOption.length !== 0){
    filterPayment(filterPaymentOption);
  }


  const filterGenderHandler = (option) => {
    setGenderOption(option);
    setCurrentPage(1);
  }
  const filterPaymentHandler = (option) => {
    setPaymentOption(option);
    setCurrentPage(1);
  }

  //Get current profiles
  const indexOfFirstProfile = (currentPage * profilesPerPage) - profilesPerPage;
  const indexOfLastProfile = (currentPage * profilesPerPage);

  let currentProfiles, length;

  currentProfiles = filteredProfiles.slice(indexOfFirstProfile, indexOfLastProfile);
  length = filteredProfiles.length;

  //Paginate 
  const paginate = (number) => {
    setCurrentPage(number)
  }
  
  //View Profile
  const viewProfile = (index, location) => {
    setLocation(location);
    setCurrentProfile(index);
  }


  return (
    <div className="App" >
      {location === "home" ? 
      <div className="home">
        <div className="search-filter">
          <Search setSearchInput={searchHandler} value={searchInput}/>
          <Filter setGender={filterGenderHandler} setPayment={filterPaymentHandler} 
          gender={filterGenderOption} payment={filterPaymentOption}/>
        </div>
        <ProfileList profiles={currentProfiles} viewProfile={viewProfile}/>
        <Pagination profilesPerPage={profilesPerPage}totalProfiles={length} 
        paginate={paginate}/>
      </div>
      :
      <ProfilePage profile={currentProfiles[currentProfile]} closeProfilePage={viewProfile}/>
      }

    </div>
  )
}

export default App;
