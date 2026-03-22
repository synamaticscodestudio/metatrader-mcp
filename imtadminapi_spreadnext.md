# SpreadNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Spreads ](imtadminapi_config_spread.md "Configuration of Spreads")/ SpreadNext | [](imtadminapi_spreadtotal.md "SpreadTotal") [](imtadminapi_config_group.md "Functions") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SpreadNext
Receiving a spread configuration by the index.
C++
MTAPIRES IMTAdminAPI::SpreadNext( const UINT pos, // Position of the configuration IMTConSymbol* spread // Spread configuration object )  
---  
.NET
MTRetCode CIMTAdminAPI.SpreadNext( uint pos, // Position of the configuration CIMTConSymbol spread // Spread configuration object )  
---  
Python
AdminAPI.SpreadNext( pos, # Position of the configuration spread # Spread configuration object )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
spread
[out] Spread configuration object. The spread object must be first created using [IMTAdminAPI::SpreadCreate](imtadminapi_spreadcreate.md "SpreadCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a spread with a specified index to spread object.