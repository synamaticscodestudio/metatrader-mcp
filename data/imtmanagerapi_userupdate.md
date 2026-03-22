# UserUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ UserUpdate | [](imtmanagerapi_userdeletebatch.md "UserDeleteBatch") [](imtmanagerapi_userupdatebatch.md "UserUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::UserUpdate
Update a user.
C++
MTAPIRES IMTManagerAPI::UserUpdate( IMTUser* user // An object of the user )  
---  
.NET
MTRetCode CIMTManagerAPI.UserUpdate( CIMTUser obj // An object of the user )  
---  
Python
ManagerAPI.UserUpdate( user # An object of the user )  
---  
Parameters
user
[in] An object of the user.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A client record can be updated only from the applications that run on the trade server where the record was created. For all other applications the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.