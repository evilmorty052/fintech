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
		//add email to localstorage to store email for use with query
        payload && localStorage.setItem('email', JSON.stringify(payload.user.identifier))
        payload && console.log(payload.user.identifier)

		//add token to localstorage to get login status of user later
		payload && localStorage.setItem('token',JSON.stringify(payload.user))
        payload && history('/enterpin')
	})
}, [ ])



return (
	<div>
	    {/* 2 Put a div that will contain the form*/}
	    <div id="mojoauth-passwordless-form" />
	    {/* <pre>{JSON.stringify(payload, null, 4)}</pre> */}
	</div>
	)
}
export default Log
