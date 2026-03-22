# AutomationGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Automation ](imtadminapi_config_automation.md "Automations")/ AutomationGet | [](imtadminapi_automationnext.md "AutomationNext") [](imtadminapi_config_vps.md "VPS") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::AutomationGet
Get an automation configuration by name.
C++
MTAPIRES IMTAdminAPI::AutomationGet( LPCWSTR name, // Configuration name IMTConAutomation* config // Automation configuration object )  
---  
.NET
MTRetCode CIMTAdminAPI.AutomationGet( string name, // Configuration name CIMTConAutomation config // Automation configuration object )  
---  
Python
AdminAPI.AutomationGet( name // Configuration name )  
---  
Parameters
name
[in] The name of the configuration.
config
[out] Automation configuration object. The 'config' object must be previously created using the [IMTAdminAPI::AutomationCreate](imtadminapi_automationcreate.md "AutomationCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConAutomation::Name](imtconautomation_name.md "Name") value is used as the name.