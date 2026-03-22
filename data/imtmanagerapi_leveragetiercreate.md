# LeverageTierCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Floating Margin ](imtmanagerapi_config_leverage.md "Floating Margin")/ LeverageTierCreate | [](imtmanagerapi_leveragerulecreate.md "LeverageRuleCreate") [](imtmanagerapi_leveragesubscribe.md "LeverageSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::LeverageTierCreate
Create an object for a floating margin rule rule.
C++
IMTConLeverageTier* IMTManagerAPI::LeverageTierCreate()  
---  
.NET
CIMTConLeverageTier CIMTManagerAPI.LeverageTierCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConLeverageTier](imtconleveragetier.md "IMTConLeverageTier") interface. In case of failure, NULL is returned.
Note
The created object must be destroyed by calling the [IMTConLeverageTier::Release](imtconleveragetier_release.md "Release") method of this object.