import { useRef, useContext } from 'react';
import AuthContextProvider from './Store/Auth-context';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {

  const history = useHistory();
const newPasswordInputRef = useRef();
const authCtx =useContext(AuthContext);

const SubmitHandler =(event) => {
  event.preventDefault();
//validation 
history.replace('/');
fetch(
  
  "https://identitytoolkit.googleapis.com/v1/accounts:update?key=[API_KEY] ");
  method: "POST",
  body: JSON.stringify({
    idToken: authCtx.token,
    password,
    returnSecureToken
  }),
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': 'Bearer ' + authCtx.token
  }
}).then(ref => {
  // assumation : successs 
})
};
  const enteredPassword = newPasswordInputRef.currentValue;
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
