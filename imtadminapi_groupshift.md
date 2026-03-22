# GroupShift (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Groups ](imtadminapi_config_group.md "Functions")/ GroupShift | [](imtadminapi_groupdeletebatch.md "GroupDeleteBatch") [](imtadminapi_grouptotal.md "GroupTotal") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::GroupShift
Changes the position of a group configuration in the list.
C++
MTAPIRES IMTAdminAPI::GroupShift( const UINT pos, // Position of the configuration const int shift // Shift )  
---  
.NET
MTRetCode CIMTAdminAPI.GroupShift( uint pos, // Position of the configuration int shift // Shift )  
---  
Python
AdminAPI.GroupShift( pos, # Position of the configuration shift # Shift )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
shift
[in] Shift of the configuration relative to its current position. A negative value means the shift to the top of the list, a positive value - to its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The position of a configuration can be changed only from the applications that run on the main server. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.