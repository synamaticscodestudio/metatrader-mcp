# UserUpdate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Users ](serverapi_users.md "Clients")/ UserUpdate | [](imtserverapi_userdelete.md "UserDelete") [](imtserverapi_usertotal.md "UserTotal") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::UserUpdate
Update a client record.
MTAPIRES IMTServerAPI::UserUpdate( IMTUser* user // An object of the client record )  
---  
Parameters
user
[in] An object of the client record.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A client record can be updated only from the plugins that run on the trade server where the record was created. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.