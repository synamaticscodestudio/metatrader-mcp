# LeverageNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Floating Margin ](imtmanagerapi_config_leverage.md "Floating Margin")/ LeverageNext | [](imtmanagerapi_leveragetotal.md "LeverageTotal") [](imtmanagerapi_leverageget.md "LeverageGet") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::LeverageNext
Get a floating margin configuration by index.
C++
MTAPIRES IMTManagerAPI::LeverageNext( const UINT pos, // Configuration position IMTConLeverage* config // Configuration object )  
---  
.NET
MTRetCode CIMTManagerAPI.LeverageNext( uint pos, // Configuration position CIMTConLeverage config // Configuration object )  
---  
Python
ManagerAPI.LeverageNext( int pos # Configuration positi )  
---  
Parameters
pos
[in] Configuration position starting from 0.
config
[out] Configuration object. The 'config' object must be created in advance using the [IMTManagerAPI::LeverageCreate](imtmanagerapi_leveragecreate.md "LeverageCreate") method.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, the code of the encountered error is returned.
Note
This method copies the subscription configuration with a specified index to the 'config' object.