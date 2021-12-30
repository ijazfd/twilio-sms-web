import axios from "axios";
import {AuthenticationType} from "../context/AuthenticationProvider";

export const buildCredentials = ({accountSid='', authToken='', apiKey='', apiSecret='', type = AuthenticationType.NONE}) => {
  switch (type) {
    case AuthenticationType.API_KEY:
      console.log('buildCredentialsApiKey', {username: accountSid, password: authToken})
      return {username: apiKey, password: apiSecret}
    case AuthenticationType.AUTH_TOKEN:
      console.log('buildCredentialsAuthToken', {username: accountSid, password: authToken})
      return {username: accountSid, password: authToken}
    default:
      return {}
  }
}

const buildUrl = (accountKey = '', type=AuthenticationType.NONE) => {
  switch (type) {
    case AuthenticationType.API_KEY:
      // return `https://api.twilio.com/2010-04-01/Accounts/${accountKey}/Applications.json`
      return `https://api.twilio.com/2010-04-01/Accounts/${accountKey}.json`
    case AuthenticationType.AUTH_TOKEN:
      return `https://api.twilio.com/2010-04-01/Accounts/${accountKey}.json`
    default:
      return ''
  }
}

const useGetTwilioAccount = ({  onSuccess = () => {},
                                onError = () => {},
                                onComplete = () => {}
                              }) => {
  const getAccount = ({accountSid='', authToken='', apiKey='', apiSecret='', type = AuthenticationType.NONE}) => {
    const url = buildUrl(accountSid, type)
    const credentials = buildCredentials({accountSid, authToken, apiKey, apiSecret, type})

    axios.get(url,
      {
        auth: credentials
      })
      .then(response => onSuccess(response))
      .catch(error => onError(error))
      .then(() => onComplete())
  }

  return getAccount
}

export default useGetTwilioAccount
