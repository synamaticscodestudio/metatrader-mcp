# AutomationParamCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Automation ](serverapi_config_automation.md "Automations")/ AutomationParamCreate | [](imtserverapi_automationactioncreate.md "AutomationActionCreate") [](imtserverapi_automationsubscribe.md "AutomationSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::AutomationParamCreate
Create an automation condition parameter object.
IMTConAutoParam* IMTServerAPI::AutomationParamCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConAutoParam](imtconautoparam.md "IMTConAutoParam") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConAutoParam::Release](imtconautoparam_release.md "Release") method of this object.