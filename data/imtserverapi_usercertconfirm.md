# UserCertConfirm (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Certificates ](serverapi_certificate.md "Certificates")/ UserCertConfirm | [](imtserverapi_usercertdelete.md "UserCertDelete") [](serverapi_trading.md "Trade") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::UserCertConfirm
Confirm the user certificate.
MTAPIRES IMTServerAPI::UserCertConfirm( const UINT64 login // User's login )  
---  
Parameters
login
[in] The login of a user whose certificate needs to be confirmed.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This function allows confirming certificates of accounts in the groups for which the appropriate mode is enabled. It is impossible to log in using a certificate until it is confirmed.