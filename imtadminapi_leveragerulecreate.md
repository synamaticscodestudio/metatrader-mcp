# LeverageRuleCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Floating Margin ](imtadminapi_config_leverage.md "Floating Margin")/ LeverageRuleCreate | [](imtadminapi_leveragecreate.md "LeverageCreate") [](imtadminapi_leveragetiercreate.md "LeverageTierCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::LeverageRuleCreate
Create an object for a floating margin configuration rule.
C++
IMTConLeverageRule* IMTAdminAPI::LeverageRuleCreate()  
---  
.NET
CIMTConLeverageRule CIMTAdminAPI.LeverageRuleCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConLeverageRule](imtconleveragerule.md "IMTConLeverageRule") interface. In case of failure, NULL is returned.
Note
The created object must be destroyed by calling the [IMTConLeverageRule::Release](imtconleveragerule_release.md "Release") method of this object.