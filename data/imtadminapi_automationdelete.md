# AutomationDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Automation ](imtadminapi_config_automation.md "Automations")/ AutomationDelete | [](imtadminapi_automationupdatebatch.md "AutomationUpdateBatch") [](imtadminapi_automationdeletebatch.md "AutomationDeleteBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::AutomationDelete
Delete an automation configuration by name.
C++
MTAPIRES IMTAdminAPI::AutomationDelete( LPCWSTR name // Configuration name )  
---  
.NET
MTRetCode CIMTAdminAPI.AutomationDelete( string name // Configuration name )  
---  
Python
AdminAPI.AutomationDelete( name # Configuration name )  
---  
Parameters
name
[in] The name of the configuration to delete.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can only be deleted from the applications that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
The [IMTConAutomation::Name](imtconautomation_name.md "Name") value is used as the configuration name.
IMTAdminAPI::AutomationDelete
Delete an automation configuration by index.
C++
MTAPIRES IMTAdminAPI::AutomationDelete( const UINT pos // Configuration position )  
---  
.NET
MTRetCode CIMTAdminAPI.AutomationDelete( uint pos // Configuration position )  
---  
Python
AdminAPI.AutomationDelete( pos # Configuration position )  
---  
Parameters
pos
[in] Position of the configuration, starting at 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can only be deleted from the applications that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.