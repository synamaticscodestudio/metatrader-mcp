# AutomationShift (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Automation ](serverapi_config_automation.md "Automations")/ AutomationShift | [](imtserverapi_automationdelete.md "AutomationDelete") [](imtserverapi_automationtotal.md "AutomationTotal") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::AutomationShift
Change the position of an automation configuration in the list.
MTAPIRES IMTServerAPI::AutomationShift( const UINT pos, // Configuration position const int shift // Shift )  
---  
Parameters
pos
[in] Position of the configuration, starting at 0.
shift
[in] The shift of the configuration relative to its current position. A negative value means shift to the top of the list, a positive value - to its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The position of a configuration can be changed only from the plugins that run on the main server. For all other plugins, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.