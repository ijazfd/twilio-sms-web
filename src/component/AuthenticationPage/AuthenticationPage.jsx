import {AccountInfo, Authentication, AuthenticationType, useAuthentication} from "../../context/AuthenticationProvider";
import {useState} from "react";
import useGetTwilioAccount from "../../hook/useGetTwilioAccount";
import {AccountDetails, AuthenticateForm} from "./AuthenticationPageView";
import DefaultLayout from "../DefaultLayout/DefaultLayout";
import ErrorLabel from "../ErrorLabel/ErrorLabel";

const AuthenticationPage = () => {
  const [authentication, setAuthentication] = useAuthentication()
  const [accountInfo, setAccountInfo] = useState(authentication.accountInfo)
  const [accountSid, setAccountSid] = useState(authentication.accountSid)
  const [authToken, setAuthToken] = useState(authentication.authToken)
  const [apiKey, setApiKey] = useState(authentication.apiKey)
  const [apiSecret, setApiSecret] = useState(authentication.apiSecret)
  const [authType, setAuthType] = useState(AuthenticationType.NONE)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleGetAccountsSuccess = (response) => {
    const info = new AccountInfo(
      response.data.friendly_name,
      response.data.type,
      response.data.status,
      response.data.date_created,
      response.data.date_updated,
    )
    setAccountInfo(info)
    const auth = new Authentication(accountSid, authToken, apiKey, apiSecret, authType, info)
    setAuthentication(auth)
  }

  const handleGetAccountsComplete = () => {
    setLoading(false)
  }

  const handleError = (err) => {
    setError(err)
  }

  const handleSubmit = (type) => {
    setLoading(true)
    setAuthType(type)
    getTwilioAccount({accountSid, authToken, apiKey, apiSecret, type})
  }

  const getTwilioAccount = useGetTwilioAccount({
    onSuccess: handleGetAccountsSuccess,
    onError: handleError,
    onComplete: handleGetAccountsComplete
  })

  return <DefaultLayout>
    <h4>Authentication</h4>
    <ErrorLabel error={error}/>
    <AuthenticateForm
      accountSid={accountSid}
      authToken={authToken}
      apiKey={apiKey}
      apiSecret={apiSecret}
      loading={loading}
      onAccountSidChange={v => setAccountSid(v)}
      onAuthTokenChange={v => setAuthToken(v)}
      onApiKeyChange={v => setApiKey(v)}
      onApiSecretChange={v => setApiSecret(v)}
      onSubmit={handleSubmit} />
    <AccountDetails accountInfo={accountInfo}/>
  </DefaultLayout>
}

export default AuthenticationPage
