# UserCertGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Certificates ](serverapi_certificate.md "Certificates")/ UserCertGet | [](imtserverapi_usercertupdate.md "UserCertUpdate") [](imtserverapi_usercertdelete.md "UserCertDelete") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::UserCertGet
Get the certificate of a client by the login.
MTAPIRES IMTServerAPI::UserCertGet( const UINT64 login, // Client login IMTCertificate* certificate // The object of the certificate )  
---  
Parameters
login
[in] The login of a client.
certificate
[out] The object of the certificate. The certificate object must be first created using the [IMTServerAPI::UserCertCreate](imtserverapi_usercertcreate.md "UserCertCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the data of a client with the specified login to the certificate object.