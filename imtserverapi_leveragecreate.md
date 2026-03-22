# LeverageCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Floating Margin ](serverapi_config_leverage.md "Floating Margin")/ LeverageCreate | [](serverapi_config_leverage.md "Floating Margin") [](imtserverapi_leveragerulecreate.md "LeverageRuleCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::LeverageCreate
Create a floating margin configuration object.
IMTConLeverage* IMTServerAPI::LeverageCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConLeverage](imtconleverage.md "IMTConLeverage") interface. In case of failure, NULL is returned.
Note
The created object must be destroyed by calling the [IMTConLeverage::Release](imtconleverage_release.md "Release") method of this object.