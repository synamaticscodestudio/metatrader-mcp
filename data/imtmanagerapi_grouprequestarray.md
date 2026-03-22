# GroupRequestArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Groups ](imtmanagerapi_config_group.md "Groups")/ GroupRequestArray | [](imtmanagerapi_grouprequest.md "GroupRequest") [](imtmanagerapi_config_symbol.md "Symbols") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::GroupRequestArray
Request from the server an array of groups by mask.
C++
MTAPIRES IMTManagerAPI::GroupRequestArray( LPCWSTR mask, // Mask IMTConGroupArray* groups // Object of the group array )  
---  
.NET
MTRetCode CIMTManagerAPI.GroupRequestArray( string mask, // Mask CIMTConGroupArray group // Object of the group array )  
---  
Python
ManagerAPI.GroupRequestArray( mask # Mask )  
---  
Parameters
mask
[in] One or more groups separated by commas. Specify the full name of the group, including the path. For example, demo\demoforex. The group name can be obtained using the [IMTConGroup::Group](imtcongroup_group.md "Group") method. Groups can also be specified using wildcard characters: "*" (any value) and "!" (exclude). For example: "demo*,!demoforex" — all groups whose names begin with 'demo', except for the group demoforex.
groups
[out] Group array object [IMTConGroupArray](imtcongrouparray.md "IMTConGroupArray"). Must be previously created by using the [IMTManagerAPI::GroupCreateArray](imtmanagerapi_groupcreatearray.md "GroupCreateArray") object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).