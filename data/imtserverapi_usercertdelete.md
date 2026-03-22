# UserCertDelete (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Certificates ](serverapi_certificate.md "Certificates")/ UserCertDelete | [](imtserverapi_usercertget.md "UserCertGet") [](imtserverapi_usercertconfirm.md "UserCertConfirm") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::UserCertDelete
Reset the user certificate.
MTAPIRES IMTServerAPI::UserCertDelete( const UINT64 login // User's login )  
---  
Parameters
login
[in] The login of a user whose certificate needs to be reset.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
If the extended authorization mode is used for the group to which the account belongs, then using this command the previously issued certificate can be reset. After that, authorization with the certificate will be impossible, and a new certificate will be issued during the next attempt of the account to connect to the server.