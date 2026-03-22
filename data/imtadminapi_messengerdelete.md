# MessengerDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Messengers ](imtadminapi_config_messenger.md "Messengers")/ MessengerDelete | [](imtadminapi_messengerupdatebatch.md "MessengerUpdateBatch") [](imtadminapi_messengerdeletebatch.md "MessengerDeleteBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::MessengerDelete
Delete a messenger configuration by name.
C++
MTAPIRES IMTAdminAPI::MessengerDelete( LPCWSTR name // Configuration name )  
---  
.NET
MTRetCode CIMTAdminAPI.MessengerDelete( string name // Configuration name )  
---  
Python
AdminAPI.MessengerDelete( string name // Configuration name )  
---  
Parameters
name
[in] The name of the configuration to delete.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can only be deleted from the applications that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
The [IMTConMessenger::Name](imtconmessenger_name.md "Name") value is used as the configuration name.
IMTAdminAPI::MessengerDelete
Delete a messenger configuration by index.
C++
MTAPIRES IMTAdminAPI::MessengerDelete( const UINT pos // Configuration position )  
---  
.NET
MTRetCode CIMTAdminAPI.MessengerDelete( uint pos // Configuration index )  
---  
Python
AdminAPI.MessengerDelete( pos # Configuration index )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can only be deleted from the applications that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.