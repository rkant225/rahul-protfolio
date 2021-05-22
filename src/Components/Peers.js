import React, { useEffect } from 'react'
import paritosh from '../Assets/paritosh.png';
import rohit from '../Assets/rohit.png';
import jyoti from '../Assets/jyoti.png';
import deep from '../Assets/deep.png';
import subhodeep from '../Assets/subhodeep.png';
import dheeraj from '../Assets/dheeraj.png';

const Peers = () => {
      
    const handleLeftButtonClick =()=>{
        document.getElementsByClassName('peers-carousel')[0].scrollLeft -= 160;
        
    }
    const handleRightButtonClick =()=>{
        document.getElementsByClassName('peers-carousel')[0].scrollLeft += 160;
    }

    return (
        <>
            <a name="PEERS" ></a>

            <div className="my-peers-container">

                <div className="my-peers-header">My Peers</div>

                
                {/* owl-carousel */}

                <i class="fa fa-arrow-left" aria-hidden="true" onClick={handleLeftButtonClick}></i>

                
                <div className="peers-carousel">
                    
                    <div className="peer-card">
                        <img className="peer-image" src={paritosh} alt="paritosh"/>
                        <div className="peer-name">Paritosh</div>
                        <div className="peer-description">
                            Paritosh is currently working at Cognizant technology solutions as lead .Net developer. His area of expertise is .Net MVC and Oracle/SQL Database.
                        </div>
                    </div>

                    <div className="peer-card">
                        <img className="peer-image" src={rohit} alt="rohit"/>
                        <div className="peer-name">Rohit</div>
                        <div className="peer-description">
                            Rohit is currently working at Cognizant technology solutions as lead .Net developer. His area of expertise is .Net MVC and Oracle/SQL Database.
                        </div>
                    </div>

                    <div className="peer-card">
                        <img className="peer-image" src={jyoti} alt="jyoti"/>
                        <div className="peer-name">Jyoti</div>
                        <div className="peer-description">
                            Jyoti is currently working at Cognizant technology solutions as lead .Net developer. His area of expertise is .Net MVC and Oracle/SQL Database.
                        </div>
                    </div>

                    <div className="peer-card">
                        <img className="peer-image" src={rohit} alt="rohit"/>
                        <div className="peer-name">Rohit</div>
                        <div className="peer-description">
                            Rohit is currently working at Cognizant technology solutions as lead .Net developer. His area of expertise is .Net MVC and Oracle/SQL Database.
                        </div>
                    </div>

                    <div className="peer-card">
                        <img className="peer-image" src={deep} alt="deep"/>
                        <div className="peer-name">Deep</div>
                        <div className="peer-description">
                            Deep is currently working at Cognizant technology solutions as lead .Net developer. His area of expertise is .Net MVC and Oracle/SQL Database.
                        </div>
                    </div>

                    <div className="peer-card">
                        <img className="peer-image" src={dheeraj} alt="dheeraj"/>
                        <div className="peer-name">Dheeraj</div>
                        <div className="peer-description">
                            Dheeraj is currently working at Cognizant technology solutions as lead .Net developer. His area of expertise is .Net MVC and Oracle/SQL Database.
                        </div>
                    </div>

                    <div className="peer-card">
                        <img className="peer-image" src={subhodeep} alt="subhodeep"/>
                        <div className="peer-name">Subhodeep</div>
                        <div className="peer-description">
                            Subhodeep is currently working at Cognizant technology solutions as lead .Net developer. His area of expertise is .Net MVC and Oracle/SQL Database.
                        </div>
                    </div>

                    <div className="peer-card">
                        <img className="peer-image" src={deep} alt="deep"/>
                        <div className="peer-name">Deep</div>
                        <div className="peer-description">
                            Deep is currently working at Cognizant technology solutions as lead .Net developer. His area of expertise is .Net MVC and Oracle/SQL Database.
                        </div>
                    </div>
                    
                </div>

                <i class="fa fa-arrow-right" aria-hidden="true" onClick={handleRightButtonClick}></i>

                {/* <div style={{overflowX : 'auto', whiteSpace : 'nowrap', width : '60%', margin : 'auto'}}>
                    <div style={{height : '10rem', width : '10rem', backgroundColor : 'blue', margin : '1rem', display : 'inline-block'}}>A</div>
                    <div style={{height : '10rem', width : '10rem', backgroundColor : 'blue', margin : '1rem', display : 'inline-block'}}>A</div>
                    <div style={{height : '10rem', width : '10rem', backgroundColor : 'blue', margin : '1rem', display : 'inline-block'}}>A</div>
                    <div style={{height : '10rem', width : '10rem', backgroundColor : 'blue', margin : '1rem', display : 'inline-block'}}>A</div>
                    <div style={{height : '10rem', width : '10rem', backgroundColor : 'blue', margin : '1rem', display : 'inline-block'}}>A</div>
                    <div style={{height : '10rem', width : '10rem', backgroundColor : 'blue', margin : '1rem', display : 'inline-block'}}>A</div>
                    <div style={{height : '10rem', width : '10rem', backgroundColor : 'blue', margin : '1rem', display : 'inline-block'}}>A</div>
                    <div style={{height : '10rem', width : '10rem', backgroundColor : 'blue', margin : '1rem', display : 'inline-block'}}>A</div>
                    <div style={{height : '10rem', width : '10rem', backgroundColor : 'blue', margin : '1rem', display : 'inline-block'}}>A</div>
                    <div style={{height : '10rem', width : '10rem', backgroundColor : 'blue', margin : '1rem', display : 'inline-block'}}>A</div>
                    <div style={{height : '10rem', width : '10rem', backgroundColor : 'blue', margin : '1rem', display : 'inline-block'}}>A</div>
                    <div style={{height : '10rem', width : '10rem', backgroundColor : 'blue', margin : '1rem', display : 'inline-block'}}>A</div>
                </div> */}
            </div>
        </>
    )
}

export default Peers;