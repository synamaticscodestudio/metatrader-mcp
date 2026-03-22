# UserDelete (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Users ](serverapi_users.md "Clients")/ UserDelete | [](imtserverapi_useradd.md "UserAdd") [](imtserverapi_userupdate.md "UserUpdate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::UserDelete
Delete a client record.
MTAPIRES IMTServerAPI::UserDelete( const UINT64 login // Login )  
---  
Parameters
login
[in] The login of a client record.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A client record can be deleted only from the plugins that run on the trade server where the record was created. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.