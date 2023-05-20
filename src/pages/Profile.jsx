import {getAuth, updateProfile } from 'firebase/auth'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {db} from '../firebase.config'
import { updateDoc, doc } from 'firebase/firestore';
import {toast} from 'react-toastify'
import arrowRight from '../assets/svg/keyboardArrowRightIcon.svg'
import homeIcon from '../assets/svg/homeIcon.svg'


export default function Profile() {
const auth = getAuth();

const [changeDetails, setChangeDetails] = useState(false)

const [formData, setFormData] = useState({
name: auth.currentUser.displayName,
emaill: auth.currentUser.email,
})

const { name, email } = formData;

const navigate = useNavigate()

const onLogout = () => {
  auth.signOut()
  navigate('/')
}

const onSubmit = async () => {
try {
  if(auth.currentUser.displayName !== name ){
    // update  diplay name in fb
    await updateProfile(auth.currentUser, {
      displayName: name
    })
    //update in firestore
    const userRef = doc(db, 'users', auth.currentUser.uid)
    await updateDoc(userRef, {
      name
    })
    toast.success("name change successful!", {
      autoClose: 3000,
    });
  }
} catch (error) {
  console.log(error)
toast.error("Could not update profile details", {
  autoClose: 3000,
});
}
}

const onChange = (e) => {
  setFormData((prevState)=> ({
    ...prevState,
    [e.target.id] : e.target.value
  }))
}

return (
  <div className="profile">
    <header className="profileHeader">
      <p className="pageHeader">My Profile</p>
      <button type="button" className="logOut" onClick={onLogout}>
        Logout
      </button>
    </header>
    <main>
      <div className="profileDetailsHeader">
        <p className="profileDetailsText">Personal Details</p>
        <p
          className="changePersonalDetails"
          onClick={() => {
            changeDetails && onSubmit();
            setChangeDetails((prevState) => !prevState);
          }}>
          {changeDetails ? "done" : "change"}
        </p>
      </div>
      <div className="profileCard">
        <form>
          <input
            type="text"
            id="name"
            className={!changeDetails ? "profileName" : "profileNameActive"}
            disabled={!changeDetails}
            value={name}
            onChange={onChange}
          />
          <input
            type="email"
            id="email"
            className={!changeDetails ? "profileEmail" : "profileEmailActive"}
            disabled={!changeDetails}
            value={email}
            onChange={onChange}
          />
        </form>
      </div>
      <Link to='/create-listing' className='createListing'>
        <img src={homeIcon} alt='home icon' />
        <p className="">Sell or rent your treehouse</p>
        <img src={arrowRight} alt='arrow right icon' />
      </Link>
    </main>
  </div>
);
}
