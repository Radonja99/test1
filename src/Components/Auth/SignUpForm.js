import { useRef } from 'react';
import { useNavigate } from 'react-router';

import classes from './AuthForm.module.css';


const AuthForm = () => {

    const navigate = useNavigate();
    const navigateToLogin = () => {
        // 👇️ navigate to /login
        navigate('/auth');
      };

    const imeInputRef = useRef();
    const prezimeInputRef= useRef();
    const telefonInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

  const submitHandler = (event) => {
      event.preventDefault();

     const enteredIme = imeInputRef.current.value;
     const enteredPrezime = prezimeInputRef.current.value;
     const enteredTelefon = telefonInputRef.current.value;
     const enteredEmail = emailInputRef.current.value;
     const enteredPassword = passwordInputRef.current.value;
     const brojRezervacija2= 0;
     const role2 = 'korisnik';
     

     fetch('https://localhost:5000/api/korisnik', {
        method: 'POST', 
        body: JSON.stringify({
            imeKorisnika: enteredIme,
            prezimeKorisnika: enteredPrezime,
            telefon: enteredTelefon,
            korisnickoIme: enteredEmail,
            lozinkaKorisnika: enteredPassword,
            brojRezervacija: brojRezervacija2,
            role: role2
        }),
        headers: {
            'Content-type' : 'application/json'
        }
     }).then(res=> {
         if (res.ok){

         }
         else {
           return res.json().then(data => {
                 //error
                 console.log(data)
             });
         }
     }).then(() => {
      navigate("/");
    });;
  }

  return (
    <section className={classes.auth}>
      <h1>Sign Up</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='password'>Your Name</label>
          <input type='text' id='ime' required ref = {imeInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Prezime</label>
          <input type='text' id='prezime' required ref = {prezimeInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Telefon</label>
          <input type='text' id='telefon' required ref = {telefonInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref = {emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref = {passwordInputRef} />
        </div>
        <div className={classes.actions}>
          <button>{'Create Account'}</button>
          <button 
          
            type='button'
            className={classes.toggle}
            onClick={navigateToLogin}
          >
            Login with existing account
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
