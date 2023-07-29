import React,{useState} from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({        //useState for setting color
    //     color: 'black',
    //     backgroundColor: 'white'
    // });

    let myStyle={
        color:props.mode==='dark'?'white':'#042743',
        backgroundColor: props.mode==='dark'?'rgb(36 74 104)':'white'
    }
 
    // const [myBtnText,setMyBtnText]=useState("Enable Dark Mode");

    // const toggleFunc = () => {
    //     if (myStyle.color == 'white') {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         });
    //         setMyBtnText("Enable Dark Mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         });
    //         setMyBtnText("Enable Light Mode");
    //     }
    //     }
   



    // let myStyle={          //manually
    //     color:'white',
    //     backgroundColor:'black'
    // }

    return (
         //myStyle is the object
        <div className='container' style={myStyle}>             
            <h1 className='my-3' style={{color:props.mode==='dark'?'white':'#042743',}}>About Us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        Have some text you want to examine? Simply type or paste your text into the provided textarea, click the <strong>Desire</strong> button, and we'll do the rest. </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong> Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        We're proud to offer you a completely free-to-use text analysis tool. Feel free to utilize it as many times as you need without any limitations or restrictions.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong> Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            designed to work smoothly across a wide range of modern web browsers. Whether you're using Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge, or any other popular browser, you can trust that our tool will function correctly.
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="container">

                <button onClick={toggleFunc} type="button" className="btn btn-primary my-2" >{myBtnText}</button>
            </div> */}

        </div>
    )
}
