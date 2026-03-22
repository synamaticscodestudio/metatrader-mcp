# UserCertUpdate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Certificates ](serverapi_certificate.md "Certificates")/ UserCertUpdate | [](imtserverapi_usercertcreate.md "UserCertCreate") [](imtserverapi_usercertget.md "UserCertGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::UserCertUpdate
Add or update a client certificate.
MTAPIRES IMTServerAPI::UserCertUpdate( const UINT64 login // Login IMTCertificate* certificate // The object of the certificate )  
---  
Parameters
login
[in] The login of the client whose certificate needs to be replaced.
certificate
[in] [The object of the certificate](imtcertificate.md "IMTCertificate") that will replace the current certificate of a client.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
If a client already has a certificate, it is updated, otherwise a new certificate is added.
A certificate can be updated only from the plugins that run on the same trade server where the client account was created. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If a user with the specified login is not found, code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.