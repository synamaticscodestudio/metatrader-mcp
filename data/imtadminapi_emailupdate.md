# EmailUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Mail Servers ](imtadminapi_config_email.md "Mail Servers")/ EmailUpdate | [](imtadminapi_emailunsubscribe.md "EmailUnsubscribe") [](imtadminapi_emailupdatebatch.md "EmailUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::EmailUpdate
Add or update a mail server configuration.
C++
MTAPIRES IMTAdminAPI::EmailUpdate( IMTConEmail* config // Mail server configuration object )  
---  
.NET
MTRetCode CIMTAdminAPI.EmailUpdate( CIMTConEmail config // Mail server configuration object )  
---  
Python
AdminAPI.EmailUpdate( config # Mail server configuration object )  
---  
Parameters
config
[in] Mail server configuration object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can only be added or updated from the applications running on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.
The record correctness is checked before the configuration is added. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.