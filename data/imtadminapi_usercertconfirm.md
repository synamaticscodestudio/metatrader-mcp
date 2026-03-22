# UserCertConfirm (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Users ](imtadminapi_user.md "Functions")/ UserCertConfirm | [](imtadminapi_usercertdelete.md "UserCertDelete") [](imtadminapi_userarchive.md "UserArchive") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::UserCertConfirm
Confirm the user certificate.
C++
MTAPIRES IMTAdminAPI::UserCertConfirm( const UINT64 login // User's login )  
---  
.NET
MTRetCode CIMTAdminAPI.UserCertConfirm( ulong login // User's login )  
---  
Python
AdminAPI.UserCertConfirm( login # User's login )  
---  
Parameters
login
[in] The login of a user whose certificate needs to be confirmed.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This function allows confirming certificates of accounts in the groups for which the appropriate mode is enabled. It is impossible to log in using a certificate until it is confirmed.