import { useState } from "react"

function FooterNewsletter() {
    const [userEmail, setUserEmail] = useState('');
    const [validateEmailResult, setValidateEmailResult] = useState(true);

    const validateEmail = ()=> {
      const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      setValidateEmailResult(emailRegex.test(userEmail))      
    }

    return (
          <div id='footer-newsletter'>
            <h1 id="title">Newsletter</h1>        
            <div id="email-input"> 
              <input 
              type="email" 
              placeholder="Enter Your Email Adress"
              onChange={e => setUserEmail(e.target.value)}
              />

              <button onClick={validateEmail}>SUBSCRIBE</button>
            </div>   
            {validateEmailResult === false && <h1 id="invalid-email">
               Invalid Email Format 
            </h1>}
          </div>
    )
}

export default FooterNewsletter