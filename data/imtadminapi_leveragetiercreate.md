# LeverageTierCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Floating Margin ](imtadminapi_config_leverage.md "Floating Margin")/ LeverageTierCreate | [](imtadminapi_leveragerulecreate.md "LeverageRuleCreate") [](imtadminapi_leveragesubscribe.md "LeverageSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::LeverageTierCreate
Create an object for a floating margin rule rule.
C++
IMTConLeverageTier* IMTAdminAPI::LeverageTierCreate()  
---  
.NET
CIMTConLeverageTier CIMTAdminAPI.LeverageTierCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConLeverageTier](imtconleveragetier.md "IMTConLeverageTier") interface. In case of failure, NULL is returned.
Note
The created object must be destroyed by calling the [IMTConLeverageTier::Release](imtconleveragetier_release.md "Release") method of this object.