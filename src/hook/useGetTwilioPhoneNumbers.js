import axios from "axios";
import {useAuthentication} from "../context/AuthenticationProvider";
import {buildCredentials} from "./useGetTwilioAccount";

const useGetTwilioPhoneNumbers = ({onSuccess = () => {},
                                onError = () => {},
                                onComplete = () => {}
                              }) => {

  const [authentication] = useAuthentication()

  const getPhoneNumbers = () => {
    const credentials = buildCredentials(authentication)
    console.log('getPhoneNumbers', authentication, credentials)


    const url = `https://api.twilio.com/2010-04-01/Accounts/${authentication.accountSid}/IncomingPhoneNumbers.json?Beta=false`
    // const url = 'http://localhost:8080/echo'
    axios.get(url,
      {
        auth: {username: credentials.username, password: credentials.password}
      })
      .then(response => onSuccess(response))
      .catch(error => onError(error))
      .then(() => onComplete())
  }

  return getPhoneNumbers
}

export default useGetTwilioPhoneNumbers
