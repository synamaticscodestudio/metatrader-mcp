# AutomationNext (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Automation ](serverapi_config_automation.md "Automations")/ AutomationNext | [](imtserverapi_automationtotal.md "AutomationTotal") [](imtserverapi_automationget.md "AutomationGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::AutomationNext
Get an automation configuration by index.
MTAPIRES IMTServerAPI::AutomationNext( const UINT pos, // Configuration position IMTConAutomation* config // Automation configuration object )  
---  
Parameters
pos
[in] Position of the configuration, starting at 0.
config
[out] Automation configuration object. The 'config' object must be previously created using the [IMTServerAPI::AutomationCreate](imtserverapi_automationcreate.md "AutomationCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of the automation task a specified index to the 'config' object.