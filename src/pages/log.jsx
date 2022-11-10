import React,{useState} from "react"
import MojoAuth from "mojoauth-web-sdk"
import { Spin } from "antd"
import { useNavigate } from "react-router-dom"


function Log() {
const history =useNavigate()
const [payload, setPayload] = React.useState(null)
const [loading, setLoading] = useState(true)
const [email, setemail] = useState('evilmorty052@proton.me')
{/* 1 Initialize and show the form*/}
React.useEffect(() => {
	const mojoauth = new MojoAuth("ddfa0887-b4ce-43dc-9ec8-5c4c53522387",{
            source:[{type:'email', feature:'otp'}]
        });
	mojoauth.signIn().then(payload => {
	    setPayload(payload)
	    document.getElementById("mojoauth-passwordless-form").remove();
        payload && localStorage.setItem('email', JSON.stringify(payload.user.identifier))
        payload && console.log(payload.user.identifier)
        payload && history('/enterpin')
	})
}, [ ])

// if(loading){
//     return(
//         <>
//          <div className="container min-h-screen flex justify-center items-center mx-auto">
//               <Spin spinning={'true'} size={'large'}/>
//          </div>
//         </>
//     )
// }

return (
	<div>
	    {/* 2 Put a div that will contain the form*/}
	    <div id="mojoauth-passwordless-form" />
	    {/* <pre>{JSON.stringify(payload, null, 4)}</pre> */}
	</div>
	)
}
export default Log
