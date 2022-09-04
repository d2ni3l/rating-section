import { useState } from 'react'
import  icon from './images/icon-star.svg'
import  thankyouimg from './images/illustration-thank-you.svg'
import './App.css'




function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [items, setItems] = useState('')
  const RateButton =  ({number}) => {
    return(
      <button className='rate-button' onClick={() => setItems(number)}>{number}</button>
    )
  
  }
  return (
    <>
     {!isSubmitted && 
         <div className="App">
         <div className="rating-container">
           <div className="img-container">
             <img src={icon} alt="" />
           </div>
           <h1 className="title">How did we do?</h1>
           <p className="paragraph">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
           <div className="rating-levels">
             <RateButton number={1} />
             <RateButton number={2} />
             <RateButton number={3} />
             <RateButton number={4} />
             <RateButton number={5} />
           </div>
           <button className='submit-btn' onClick={() => setIsSubmitted(true)}>Submit</button>
         </div>
         </div>
     }

     {isSubmitted && <ThankYou setIsSubmitted={setIsSubmitted} items={items} /> }
       <div className="autor">Coded by <span>Daniel</span></div>
      </>
     

  )
}

const ThankYou = ({items, setIsSubmitted}) => {
 return(
  <div className="thanks-container">
  <img src={thankyouimg} alt="" />
  <div className="thanks-selected">You selected out {items} of 5</div>
  <h1  className="thanks-title"> Thank you!</h1>
  <p className="thanks-description">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
  <button className="submit-btn" onClick={() => setIsSubmitted(false)}>rate again</button>
</div>
 )
}

export default App
