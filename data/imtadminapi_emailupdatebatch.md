# EmailUpdateBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Mail Servers ](imtadminapi_config_email.md "Mail Servers")/ EmailUpdateBatch | [](imtadminapi_emailupdate.md "EmailUpdate") [](imtadminapi_emaildelete.md "EmailDelete") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::EmailUpdateBatch
Add or edit multiple mail server configurations.
C++
MTAPIRES IMTAdminAPI::EmailUpdateBatch( IMTConEmail**  configs, // Array of configurations const UINT config_total, // Number of configuration in the array MTAPIRES* results // Array of results )  
---  
.NET
MTRetCode CIMTAdminAPI.EmailUpdateBatch( CIMTConEmail[] configs, // Array of settings MTRetCode[] results // Array of results )  
---  
Python
AdminAPI.EmailUpdateBatch( configs // Array of settings )  
---  
Parameters
configs
[in] A pointer to an array of configurations which you want to add/update.
config_total
[in] The number of configurations in the 'configs' array.
results
[out] An array with the results of each configuration applying on the server.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned. The [MT_RET_OK](retcodes_successful.md "Successful completion") response code is an indication of successful change sending to a server; change applying results are passed in the 'results' parameter.
Note
A configuration can only be added or updated from the applications running on the main server. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned.
The record correctness is checked before the configuration is added. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.