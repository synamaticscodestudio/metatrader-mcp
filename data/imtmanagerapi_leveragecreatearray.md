# LeverageCreateArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Floating Margin ](imtmanagerapi_config_leverage.md "Floating Margin")/ LeverageCreateArray | [](imtmanagerapi_leveragecreate.md "LeverageCreate") [](imtmanagerapi_leveragerulecreate.md "LeverageRuleCreate") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::LeverageCreateArray
Create an object for a floating margin configuration array.
C++
IMTConLeverageArray* IMTManagerAPI::LeverageCreateArray()  
---  
.NET
CIMTConLeverageArray CIMTManagerAPI.LeverageCreateArray()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConLeverageArray](imtconleveragearray.md "IMTConLeverageArray") interface. In case of failure, NULL is returned.
Note
The created object must be destroyed by calling the [IMTConLeverageArray::Release](imtconleveragearray_release.md "Release") method of this object.