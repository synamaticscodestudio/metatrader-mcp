# LeverageShift (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Floating Margin ](imtadminapi_config_leverage.md "Floating Margin")/ LeverageShift | [](imtadminapi_leveragedeletebatch.md "LeverageDeleteBatch") [](imtadminapi_leveragetotal.md "LeverageTotal") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::LeverageShift
Change the position of a floating margin configuration in the list.
C++
MTAPIRES IMTAdminAPI::LeverageShift( const UINT pos, // Configuration position const int shift // Shift )  
---  
.NET
MTRetCode CIMTAdminAPI.LeverageShift( uint pos, // Position configuration int shift // Shift )  
---  
Python
AdminAPI.LeverageShift( int pos, # Position configuration int shift # Shift )  
---  
Parameters
pos
[in] Configuration position starting from 0.
shift
[in] Configuration shift relative to its current position. A negative value means shift towards the top of the list, while a positive value shifts the item towards the end.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, the code of the encountered error is returned.
Note
The position of a configuration can only be changed from the plugins running on the main server. For all other plugins, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned.