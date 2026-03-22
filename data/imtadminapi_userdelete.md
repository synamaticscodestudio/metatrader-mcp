# UserDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Users ](imtadminapi_user.md "Functions")/ UserDelete | [](imtadminapi_useradd.md "UserAdd") [](imtadminapi_userdeletebatch.md "UserDeleteBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::UserDelete
Delete a user.
C++
MTAPIRES IMTAdminAPI::UserDelete( const UINT64 login // Login )  
---  
.NET
MTRetCode CIMTAdminAPI.UserDelete( ulong login // Login )  
---  
Python
AdminAPI.UserDelete( login # Login )  
---  
Parameters
login
[in] The login of a user.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A client record can be deleted only from the applications that run on the trade server where the record was created. For all other applications the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.