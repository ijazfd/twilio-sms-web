import axios from "axios";
import {useAuthentication} from "../context/AuthenticationProvider";
import {buildCredentials} from "./useGetTwilioAccount";

const useGetTwilioMessages = () => {

  const [authentication] = useAuthentication()

  const request = async ({phoneNumber}) => {
    const credentials = buildCredentials(authentication)
    const url = `https://api.twilio.com/2010-04-01/Accounts/${authentication.accountSid}/Messages.json`
    let result = []
       const fromResult = await axios.get(url,
        {
          auth: credentials,
          params: {From: phoneNumber}
        })
      const toResult = await axios.get(url,
        {
          auth: credentials,
          params: {To: phoneNumber}
        })
      result = result
        .concat(fromResult.data.messages)
        .concat(toResult.data.messages)
    const sortByDate = (a,b) => Date.parse(a.date_created) > Date.parse(b.date_created) ? -1 : 1
    return result.sort(sortByDate)
  }

  return request
}

export default useGetTwilioMessages
