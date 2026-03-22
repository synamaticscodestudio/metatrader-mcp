# SpreadNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Spreads ](imtmanagerapi_config_spread.md "Configuration of Spreads")/ SpreadNext | [](imtmanagerapi_spreadtotal.md "SpreadTotal") [](imtmanagerapi_config_plugin.md "Plugins") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SpreadNext
Receiving a spread configuration by the index.
C++
MTAPIRES IMTManagerAPI::SpreadNext( const UINT pos, // Position of the configuration IMTConSymbol* spread // Spread configuration object )  
---  
.NET
MTRetCode CIMTManagerAPI.SpreadNext( uint pos, // Position of the configuration CIMTConSymbol spread // Spread configuration object )  
---  
Python
ManagerAPI.SpreadNext( pos # configuration position )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
spread
[out] Spread configuration object. The spread object must be first created using [IMTManagerAPI::SpreadCreate](imtmanagerapi_spreadcreate.md "SpreadCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a spread with a specified index to spread object.