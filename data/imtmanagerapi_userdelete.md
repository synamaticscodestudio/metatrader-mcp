# UserDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ UserDelete | [](imtmanagerapi_useradd.md "UserAdd") [](imtmanagerapi_userdeletebatch.md "UserDeleteBatch") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::UserDelete
Delete a user.
C++
MTAPIRES IMTManagerAPI::UserDelete( const UINT64 login // Login )  
---  
.NET
MTRetCode CIMTManagerAPI.UserDelete( ulong login // Login )  
---  
Python
ManagerAPI.UserDelete( login # Login )  
---  
Parameters
login
[in] The login of a user.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A client record can be deleted only from the applications that run on the trade server where the record was created. For all other applications the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.