# LeverageNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Floating Margin ](imtadminapi_config_leverage.md "Floating Margin")/ LeverageNext | [](imtadminapi_leveragetotal.md "LeverageTotal") [](imtadminapi_leverageget.md "LeverageGet") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::LeverageNext
Get a floating margin configuration by index.
C++
MTAPIRES IMTAdminAPI::LeverageNext( const UINT pos, // Configuration position IMTConLeverage* config // Configuration object )  
---  
.NET
MTRetCode CIMTAdminAPI.LeverageNext( uint pos, // Configuration position CIMTConLeverage config // Configuration object )  
---  
Python
AdminAPI.LeverageNext( int pos # Configuration position )  
---  
Parameters
pos
[in] Configuration position starting from 0.
config
[out] Configuration object. The config object must be previously created using the [IMTAdminAPI::LeverageCreate](imtadminapi_leveragecreate.md "LeverageCreate") method.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, the code of the encountered error is returned.
Note
This method copies the floating margin configuration with a specified index to the 'config' object.