# AutomationActionCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Automation ](imtadminapi_config_automation.md "Automations")/ AutomationActionCreate | [](imtadminapi_automationconditioncreate.md "AutomationConditionCreate") [](imtadminapi_automationparamcreate.md "AutomationParamCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::AutomationActionCreate
Create an automation task action object.
C++
IMTConAutoAction* IMTAdminAPI::AutomationActionCreate()  
---  
.NET
CIMTConAutoAction CIMTAdminAPI.AutomationActionCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConAutoAction](imtconautoaction.md "IMTConAutoAction") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConAutoAction::Release](imtconautoaction_release.md "Release") method of this object.