# SpreadShift (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Spreads ](imtadminapi_config_spread.md "Configuration of Spreads")/ SpreadShift | [](imtadminapi_spreaddeletebatch.md "SpreadDeleteBatch") [](imtadminapi_spreadtotal.md "SpreadTotal") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SpreadShift
Change the position of a spread configuration in the list.
C++
MTAPIRES IMTAdminAPI::SpreadShift( const UINT pos, // Position of the configuration const int shift // Shift )  
---  
.NET
MTRetCode CIMTAdminAPI.SpreadShift( uint pos, // Position of the configuration int shift // Shift )  
---  
Python
AdminAPI.SpreadShift( pos, # Position of the configuration shift # Shift )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
shift
[in] Shift of the configuration relative to its current position. A negative value means the shift to the top of the list, a positive value - to its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The position of a configuration can be changed only from the plugins that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.