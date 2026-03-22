# LeverageRuleCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Floating Margin ](imtmanagerapi_config_leverage.md "Floating Margin")/ LeverageRuleCreate | [](imtmanagerapi_leveragecreatearray.md "LeverageCreateArray") [](imtmanagerapi_leveragetiercreate.md "LeverageTierCreate") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::LeverageRuleCreate
Create an object for a floating margin configuration rule.
C++
IMTConLeverageRule* IMTManagerAPI::LeverageRuleCreate()  
---  
.NET
CIMTConLeverageRule CIMTManagerAPI.LeverageRuleCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConLeverageRule](imtconleveragerule.md "IMTConLeverageRule") interface. In case of failure, NULL is returned.
Note
The created object must be destroyed by calling the [IMTConLeverageRule::Release](imtconleveragerule_release.md "Release") method of this object.