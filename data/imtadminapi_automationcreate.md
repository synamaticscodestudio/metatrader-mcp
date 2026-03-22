# AutomationCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Automation ](imtadminapi_config_automation.md "Automations")/ AutomationCreate | [](imtadminapi_config_automation.md "Automations") [](imtadminapi_automationconditioncreate.md "AutomationConditionCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::AutomationCreate
Create an automation configuration object.
C++
IMTConAutomation* IMTAdminAPI::AutomationCreate()  
---  
.NET
CIMTConAutomation CIMTAdminAPI.AutomationCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConAutomation](imtconautomation.md "IMTConAutomation") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConAutomation::Release](imtconautomation_release.md "Release") method of this object.