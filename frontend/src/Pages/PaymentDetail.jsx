import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { FaMoneyBill, FaCreditCard , FaMoneyBillWave , FaFileInvoice} from 'react-icons/fa';

import './PaymentDetail.css';

export default function PaymentDetail() {
    const [nb, setNb] = useState(false);
    const [upi, setUpi] = useState(false);
    const [card, setCard] = useState(false);
    function NB() {
        if (nb == false) {
            setNb(true)
            setUpi(false)
            setCard(false)
        }

    }
    function UPI() {
        if (upi == false) {
            setNb(false)
            setUpi(true)
            setCard(false)
        }

    }
    function CARD() {
        if (card == false) {
            setNb(false)
            setUpi(false)
            setCard(true)
        }

    }
    const handleImageClick = (externalUrl) => {
        window.open(externalUrl, '_blank'); // Opens the external URL in a new tab
      };
    


    return (<>



<Container fluid style={{ backgroundColor: '#111315' , color: '#ffffff'  }}>

            <div className='d-flex'>
                <div className='col-4'>
                    <div><h4>Payment Option </h4></div>
                    <div><button className='btn1' onClick={NB}>Net Banking</button> <FaMoneyBill/> </div>
                    <div><button className='btn1' onClick={CARD}>Card</button> <FaCreditCard/></div>
                    <div><button className='btn1' onClick={UPI}>UPI  </button>  <FaMoneyBillWave/> </div>
             <br></br>   
             <br></br>  
 <div>                 
  <h4>Select an option</h4>
  {/* Add your radio buttons here */}

  {/* Add your images here with inline styles */}
  <input type="radio"></input>
  <img
    src='https://logowik.com/content/uploads/images/visa-payment-card1873.jpg'
    alt='Image 1'
    onClick={() => handleImageClick('https://www.visa.co.in/')}
    style={{ maxWidth: '100px', maxHeight: '75px', cursor: 'pointer' }}
  />
   <br></br>  
   <input type="radio"></input>
  <img
    src='https://inkbotdesign.com/wp-content/uploads/2020/02/MasterCard-Logo-1979-1024x576.webp'
    alt='Image 2'
    onClick={() => handleImageClick('https://www.mastercard.co.in/en-in.html')}
    style={{ maxWidth: '100px', maxHeight: '75px', cursor: 'pointer' }}
  />
   <br></br> 
   <input type="radio"></input> 
  <img
    src='https://logos-world.net/wp-content/uploads/2020/11/Paytm-Symbol.png'
    alt='Image 3'
    onClick={() => handleImageClick('https://paytm.com/')}
    style={{ maxWidth: '100px', maxHeight: '75px', cursor: 'pointer' }}
  />
   <br></br>  
   <input type="radio"></input>
  <img
    src='https://1000logos.net/wp-content/uploads/2018/03/SBI-Logo.png'
    alt='Image 4'
    onClick={() => handleImageClick('https://sbi.co.in/')}
    style={{ maxWidth: '100px', maxHeight: '75px', cursor: 'pointer' }}
  />
   
</div>
</div>

                <div className='col-8'>
                    <div className='txt-centre'>
                        <h4>Payment Details</h4>
                    </div>
                    <div>
                        <NetBanking status={nb} />
                        <Card status={card} />
                        <Upi status={upi} />
                    </div>
                </div>
            </div>
        </Container>
    </>)
}


function Upi(props) {




    if (props.status == true) {
        return (<>
            <h4>Your Detail  <FaMoneyBillWave/> </h4>
            <form>
                <div class="row">
                    <div class="col-4">
                        <input type="text" class="form-control" placeholder="First name"></input>
                    </div>
                    <div class="col-4">
                        <input type="text" class="form-control" placeholder="Last name"></input>
                    </div>
                   
                    <br></br> 
                    <br></br> 
                    <br></br> 

                    <div class="col-8"> 
                        <input type="text" class="form-control" placeholder='Email'></input>
                    </div>
                    <br></br> 
                    <br></br> 

                    <div class="col-5">
                        <input type="integer" class="form-control" placeholder='Phone Number'></input>
                    </div>
                </div>

                <br/>
                <h4>UPI-ID</h4>
                    <div class="col-8">
                        <input type="text" class="form-control" placeholder='Enter Your UPI ID'></input>
                    </div>
                    <br></br>
                <button type="submit" class="btn btn-primary" >  <a  href="/Cart/PaymentDetail/PlacedOrder" > Pay </a> </button>
            </form>
        </>)


    }
    else {
        return (<></>)
    }

}

function NetBanking(props) {



    if (props.status == true) {
        return (<>
            <h4>Net Banking <FaCreditCard/> </h4>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div>
                <br></br> 
                    <br></br> 

                <button type="submit" class="btn btn-primary" > <a  href="/Cart/PaymentDetail/PlacedOrder" > Pay </a></button>
            </form>
        </>)


    }
    else {
        return (<></>)
    }

}



function Card(props) {



    if (props.status == true) {
        return (<>
            <h4>CARD   </h4>
            <form>
            <div class="row">
                <div class="col-6"><p>Card Number</p><input class="form-control"></input></div>
                <div class="col-6"><p>CVV</p><input class="form-control"></input></div>
            </div>

            <p>CARD HOLDER NAME</p>
          
            <input class="form-control"></input>

            <p>EXPERITION DATE</p>
            <input class="form-control"></input>
            <br/>
            <button type="submit" class="btn btn-primary" > <a  href="/Cart/PaymentDetail/PlacedOrder" >Pay  </a> </button>
            </form>
        </>)


    }
    else {
        return (<></>)
    }

}