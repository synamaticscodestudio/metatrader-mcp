# UserCertUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Users ](imtadminapi_user.md "Functions")/ UserCertUpdate | [](imtadminapi_usercertcreate.md "UserCertCreate") [](imtadminapi_usercertget.md "UserCertGet") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::UserCertUpdate
Add or update a client certificate.
C++
MTAPIRES IMTAdminAPI::UserCertUpdate( const UINT64 login // Login IMTCertificate* certificate // The object of the certificate )  
---  
.NET
MTRetCode CIMTAdminAPI.UserCertUpdate( ulong login // Login CIMTCertificate certificate // The object of the certificate )  
---  
Python
AdminAPI.UserCertUpdate( login # Login certificate # The object of the certificate )  
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
A certificate can be updated only from the applications that are connected to the same trade server where the client account was created. If the client with the specified login is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.