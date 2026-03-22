# AutomationParamCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Automation ](imtadminapi_config_automation.md "Automations")/ AutomationParamCreate | [](imtadminapi_automationactioncreate.md "AutomationActionCreate") [](imtadminapi_automationsubscribe.md "AutomationSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::AutomationParamCreate
Create an automation condition parameter object.
C++
IMTConAutoParam* IMTAdminAPI::AutomationParamCreate()  
---  
.NET
CIMTConAutoParam CIMTAdminAPI.AutomationParamCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConAutoParam](imtconautoparam.md "IMTConAutoParam") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConAutoParam::Release](imtconautoparam_release.md "Release") method of this object.