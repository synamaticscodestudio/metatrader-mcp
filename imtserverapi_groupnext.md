# GroupNext (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Groups ](serverapi_config_group.md "Groups")/ GroupNext | [](imtserverapi_grouptotal.md "GroupTotal") [](imtserverapi_groupget.md "GroupGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::GroupNext
Get the group configuration by the index.
MTAPIRES IMTServerAPI::GroupNext( const UINT pos, // Position of the configuration IMTConGroup* group // Group configuration object )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
group
[out] An object of group configuration. The group object must be first created using the [IMTServerAPI::GroupCreate](imtserverapi_groupcreate.md "GroupCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a group with a specified index to the group object.