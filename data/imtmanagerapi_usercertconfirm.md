# UserCertConfirm (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ UserCertConfirm | [](imtmanagerapi_usercertdelete.md "UserCertDelete") [](imtmanagerapi_useraccountsubscribe.md "UserAccountSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::UserCertConfirm
Confirm the user certificate.
C++
MTAPIRES IMTManagerAPI::UserCertConfirm( const UINT64 login // User's login )  
---  
.NET
MTRetCode CIMTManagerAPI.UserCertConfirm( ulong login // User's login )  
---  
Python
ManagerAPI.UserCertConfirm( login # User's login )  
---  
Parameters
login
[in] The login of a user whose certificate needs to be confirmed.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This function allows confirming certificates of accounts in the groups for which the appropriate mode is enabled. It is impossible to log in using a certificate until it is confirmed.