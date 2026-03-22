# UserCertGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ UserCertGet | [](imtmanagerapi_usercertupdate.md "UserCertUpdate") [](imtmanagerapi_usercertdelete.md "UserCertDelete") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::UserCertGet
Get the certificate of a client by the login.
C++
MTAPIRES IMTManagerAPI::UserCertGet( const UINT64 login, // Client login IMTCertificate* certificate // The object of the certificate )  
---  
.NET
MTRetCode CIMTManagerAPI.UserCertGet( ulong login, // Client login CIMTCertificate obj // The object of the certificate )  
---  
Python
ManagerAPI.UserCertGet( login, # Client login certificate # The object of the certificate )  
---  
Parameters
login
[in] The login of a client.
certificate
[out] The object of the certificate. The certificate object must be first created using the [IMTManagerAPI::UserCertCreate](imtmanagerapi_usercertcreate.md "UserCertCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the data of a client with the specified login to the certificate object.