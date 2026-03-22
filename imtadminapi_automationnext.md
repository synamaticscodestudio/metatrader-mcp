# AutomationNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Automation ](imtadminapi_config_automation.md "Automations")/ AutomationNext | [](imtadminapi_automationtotal.md "AutomationTotal") [](imtadminapi_automationget.md "AutomationGet") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::AutomationNext
Get an automation configuration by index.
C++
MTAPIRES IMTAdminAPI::AutomationNext( const UINT pos, // Configuration position IMTConAutomation* config // Automation configuration object )  
---  
.NET
MTRetCode CIMTAdminAPI.AutomationNext( uint pos, // Configuration position CIMTConAutomation config // Automation configuration object )  
---  
Python
AdminAPI.AutomationNext( pos # Configuration position )  
---  
Parameters
pos
[in] Position of the configuration, starting at 0.
config
[out] Automation configuration object. The 'config' object must be previously created using the [IMTAdminAPI::AutomationCreate](imtadminapi_automationcreate.md "AutomationCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of the automation task a specified index to the 'config' object.