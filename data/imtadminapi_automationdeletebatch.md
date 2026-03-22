# AutomationDeleteBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Automation ](imtadminapi_config_automation.md "Automations")/ AutomationDeleteBatch | [](imtadminapi_automationdelete.md "AutomationDelete") [](imtadminapi_automationshift.md "AutomationShift") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::AutomationDeleteBatch
Delete multiple automation configurations.
C++
MTAPIRES IMTAdminAPI::AutomationDeleteBatch( IMTConAutomation**  configs, // Array of settings const UINT config_total, // Number of settings in the array MTAPIRES* results // Array of results )  
---  
.NET
MTRetCode CIMTAdminAPI.AutomationDeleteBatch( CIMTConAutomation[] configs, // Array of settings MTRetCode[] results // Array of results )  
---  
Python
AdminAPI.AutomationDeleteBatch( configs # Array of settings )  
---  
Parameters
configs
[in] A pointer to an array of configurations which you want to delete.
config_total
[in] The number of configurations in the 'configs' array.
results
[out] An array with the results of deletion of each configuration on the server.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned. The [MT_RET_OK](retcodes_successful.md "Successful completion") response code is an indication of successful sending of changes to a server; results of applying the changes are passed in the 'results' parameter.
Note
Configurations can only be deleted when connected to the main trade server. In all other cases, the [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") response code is returned. If the object is not found, the [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") error code is added to the 'results' array of this object.