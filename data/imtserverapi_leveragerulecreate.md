# LeverageRuleCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Floating Margin ](serverapi_config_leverage.md "Floating Margin")/ LeverageRuleCreate | [](imtserverapi_leveragecreate.md "LeverageCreate") [](imtserverapi_leveragetiercreate.md "LeverageTierCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::LeverageRuleCreate
Create an object for a floating margin configuration rule.
IMTConLeverageRule* IMTServerAPI::LeverageRuleCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConLeverageRule](imtconleveragerule.md "IMTConLeverageRule") interface. In case of failure, NULL is returned.
Note
The created object must be destroyed by calling the [IMTConLeverageRule::Release](imtconleveragerule_release.md "Release") method of this object.