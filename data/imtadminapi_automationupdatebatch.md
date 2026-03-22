# AutomationUpdateBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Automation ](imtadminapi_config_automation.md "Automations")/ AutomationUpdateBatch | [](imtadminapi_automationupdate.md "AutomationUpdate") [](imtadminapi_automationdelete.md "AutomationDelete") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::AutomationUpdateBatch
Add or edit multiple automation configurations.
C++
MTAPIRES IMTAdminAPI::AutomationUpdateBatch( IMTConAutomation** configs, // Array of settings const UINT config_total, // Number of settings in the array MTAPIRES* results // Array of results )  
---  
.NET
MTRetCode CIMTAdminAPI.AutomationUpdateBatch( CIMTConAutomation[] configs, // Array of settings MTRetCode[] results // Array of results )  
---  
Python
AdminAPI.AutomationUpdateBatch( configs # Array of settings )  
---  
Parameters
configs
[in] A pointer to an array of configurations which you want to add/update.
config_total
[in] The number of configurations in the 'configs' array.
results
[out] An array with the results of applying of each configuration change on the server.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned. The [MT_RET_OK](retcodes_successful.md "Successful completion") response code is an indication of successful sending of changes to a server; results of applying the changes are passed in the 'results' parameter.
Note
A configuration can only be added or updated from the applications running on the main server. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned.
Before adding a record, its correctness is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.