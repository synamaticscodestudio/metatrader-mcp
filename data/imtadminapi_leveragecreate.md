# LeverageCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Floating Margin ](imtadminapi_config_leverage.md "Floating Margin")/ LeverageCreate | [](imtadminapi_config_leverage.md "Floating Margin") [](imtadminapi_leveragerulecreate.md "LeverageRuleCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::LeverageCreate
Create a floating margin configuration object.
C++
IMTConLeverage* IMTAdminAPI::LeverageCreate()  
---  
.NET
CIMTConLeverage CIMTAdminAPI.LeverageCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConLeverage](imtconleverage.md "IMTConLeverage") interface. In case of failure, NULL is returned.
Note
The created object must be destroyed by calling the [IMTConLeverage::Release](imtconleverage_release.md "Release") method of this object.