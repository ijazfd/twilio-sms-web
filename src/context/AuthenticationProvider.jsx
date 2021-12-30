import React, {useContext, useState} from "react";

/**
 * Types of authentication
 * @enum {string}
 */
export const AuthenticationType = {
  AUTH_TOKEN: 'auth-token',
  API_KEY: 'api-key',
  NONE: ''
}

/**
 * Account information
 */
export class AccountInfo {
  /**
   * @param {string} name
   * @param {string} type
   * @param {string} status
   * @param {Date} dateCreated
   * @param {Date} dateUpdated
   */
  constructor(name='', type='', status='', dateCreated=new Date(), dateUpdated=new Date()) {
    this.name = name
    this.type = type
    this.status = status
    this.dateCreated = dateCreated
    this.dateUpdated = dateUpdated
  }
}

/**
 * Authentication data
 */
export class Authentication {
  /**
   * @param {string} accountSid
   * @param {string} authToken
   * @param {string} apiKey
   * @param {string} apiSecret
   * @param {AuthenticationType} type
   * @param {AccountInfo} accountInfo
   */
  constructor(accountSid='',
              authToken='',
              apiKey='',
              apiSecret='',
              type= AuthenticationType.NONE,
              accountInfo= new AccountInfo()) {
    this.accountSid = accountSid
    this.authToken = authToken
    this.apiKey = apiKey
    this.apiSecret = apiSecret
    this.type = type
    this.accountInfo = accountInfo
  }
}


const AuthenticationReadContext = React.createContext({})
const AuthenticationWriteContext = React.createContext(() => {})

export const useAuthentication = () => {
  const value = useContext(AuthenticationReadContext)
  const setValue = useContext(AuthenticationWriteContext)
  return [value, setValue]
}

export const AuthenticationProvider = ({children}) => {
  const [value, setValue] = useState(new Authentication())
  const handleSetValue = (v) => {
    setValue(v)
  }
  return (
    <AuthenticationReadContext.Provider value={value}>
      <AuthenticationWriteContext.Provider value={handleSetValue}>
        {children}
      </AuthenticationWriteContext.Provider>
    </AuthenticationReadContext.Provider>
  )
}
