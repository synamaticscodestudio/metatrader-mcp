# UserCertUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ UserCertUpdate | [](imtmanagerapi_usercertcreate.md "UserCertCreate") [](imtmanagerapi_usercertget.md "UserCertGet") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::UserCertUpdate
Add or update a client certificate.
C++
MTAPIRES IMTManagerAPI::UserCertUpdate( const UINT login // Login IMTCertificate* certificate // The object of the certificate )  
---  
.NET
MTRetCode CIMTManagerAPI.UserCertUpdate( ulong login // Login CIMTCertificate obj // The object of the certificate )  
---  
Python
ManagerAPI.UserCertUpdate( login # Login certificate # The object of the certificate )  
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