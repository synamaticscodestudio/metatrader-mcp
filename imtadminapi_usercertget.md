# UserCertGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Users ](imtadminapi_user.md "Functions")/ UserCertGet | [](imtadminapi_usercertupdate.md "UserCertUpdate") [](imtadminapi_usercertdelete.md "UserCertDelete") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::UserCertGet
Get the certificate of a client by the login.
C++
MTAPIRES IMTAdminAPI::UserCertGet( const UINT64 login, // Client login IMTUCertificate* certificate // The object of the certificate )  
---  
.NET
MTRetCode CIMTAdminAPI.UserCertGet( ulong login, // Client login CIMTUCertificate certificate // The object of the certificate )  
---  
Python
AdminAPI.UserCertGet( login, # Client login certificate # The object of the certificate )  
---  
Parameters
login
[in] The login of a client.
certificate
[out] The object of the certificate. The certificate object must be first created using the [IMTAdminAPI::UserCertCreate](imtadminapi_usercertcreate.md "UserCertCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the data of a client with the specified login to the certificate object.