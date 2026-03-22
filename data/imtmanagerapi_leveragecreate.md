# LeverageCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Floating Margin ](imtmanagerapi_config_leverage.md "Floating Margin")/ LeverageCreate | [](imtmanagerapi_config_leverage.md "Floating Margin") [](imtmanagerapi_leveragecreatearray.md "LeverageCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::LeverageCreate
Create a floating margin configuration object.
C++
IMTConLeverage* IMTManagerAPI::LeverageCreate()  
---  
.NET
CIMTConLeverage CIMTManagerAPI.LeverageCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConLeverage](imtconleverage.md "IMTConLeverage") interface. In case of failure, NULL is returned.
Note
The created object must be destroyed by calling the [IMTConLeverage::Release](imtconleverage_release.md "Release") method of this object.