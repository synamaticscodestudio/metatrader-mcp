# AutomationGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Automation ](serverapi_config_automation.md "Automations")/ AutomationGet | [](imtserverapi_automationnext.md "AutomationNext") [](imtserverapi_automationtrigger.md "AutomationTrigger") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::AutomationGet
Get an automation configuration by name.
MTAPIRES IMTServerAPI::AutomationGet( LPCWSTR name, // Configuration name IMTConAutomation* config // Automation configuration object )  
---  
Parameters
name
[in] The name of the configuration.
config
[out] Automation configuration object. The 'config' object must be previously created using the [IMTServerAPI::AutomationCreate](imtserverapi_automationcreate.md "AutomationCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConAutomation::Name](imtconautomation_name.md "Name") value is used as the name.