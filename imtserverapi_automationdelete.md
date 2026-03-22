# AutomationDelete (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Automation ](serverapi_config_automation.md "Automations")/ AutomationDelete | [](imtserverapi_automationadd.md "AutomationAdd") [](imtserverapi_automationshift.md "AutomationShift") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::AutomationDelete
Delete an automation configuration by name.
MTAPIRES IMTServerAPI::AutomationDelete( LPCWSTR name // Configuration name )  
---  
Parameters
name
[in] The name of the configuration to delete.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be deleted only from the applications that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
The [IMTConAutomation::Name](imtconautomation_name.md "Name") value is used as the configuration name.
IMTServerAPI::AutomationDelete
Delete an automation configuration by index.
MTAPIRES IMTServerAPI::AutomationDelete( const UINT pos // Configuration position )  
---  
Parameters
pos
[in] Position of the configuration, starting at 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be deleted only from the applications that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.