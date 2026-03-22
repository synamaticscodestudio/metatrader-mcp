# EmailDelete (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Mail Servers ](serverapi_config_email.md "Mail Servers")/ EmailDelete | [](imtserverapi_emailadd.md "EmailAdd") [](imtserverapi_emailshift.md "EmailShift") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::EmailDelete
Delete a mail server configuration by name.
MTAPIRES IMTServerAPI::EmailDelete( LPCWSTR name // Configuration name )  
---  
Parameters
name
[in] The name of the configuration to delete.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be deleted only from the applications that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
The [IMTConEmail::Name](imtconemail_name.md "Name") value is used as the configuration name.
IMTServerAPI::EmailDelete
Delete a mail server configuration by index.
MTAPIRES IMTServerAPI::EmailDelete( const UINT pos // Configuration position )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be deleted only from the applications that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.