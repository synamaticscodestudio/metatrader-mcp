# LeverageTierCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Floating Margin ](serverapi_config_leverage.md "Floating Margin")/ LeverageTierCreate | [](imtserverapi_leveragerulecreate.md "LeverageRuleCreate") [](imtserverapi_leveragesubscribe.md "LeverageSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::LeverageTierCreate
Create an object for a floating margin rule rule.
IMTConLeverageTier* IMTServerAPI::LeverageTierCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConLeverageTier](imtconleveragetier.md "IMTConLeverageTier") interface. In case of failure, NULL is returned.
Note
The created object must be destroyed by calling the [IMTConLeverageTier::Release](imtconleveragetier_release.md "Release") method of this object.