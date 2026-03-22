# GroupAdd (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Groups ](net_group.md "Groups")/ GroupAdd | [](net_group.md "Groups") [](net_groupdelete.md "GroupDelete") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.GroupAdd
Add or change a group configuration on the server.
MTRetCode MT5WebAPI.GroupAdd( MTConGroup group, // Description of the group to create out MTConGroup newConGroup // Description of the created group )  
---  
Parameters
group
[in] The MTConGroup structure that describes the configuration of the group that you need to create. Description of the structure parameters is provided in the ["Data Structure"](webapi_group_data_format.md "Data Structure") section.
newConGroup
[Out] The MTConGroup structure that describes the configuration of the group, which was created on the server. Description of the structure parameters is provided in the ["Data Structure"](webapi_group_data_format.md "Data Structure") section.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
  * To create a group in the MTConGroup structure, you only need to specify its name.

  * When creating an object using the MTConGroup.CreateDefault method, all the structure fields are filled with zeros or default values. When updating a group, you should either set all its parameters manually or get its configuration using the [MT5WebAPI::GroupNext](net_groupnext.md "GroupNext") or [MT5WebAPI::GroupGet](net_groupget.md "GroupGet") method and edit it appropriately.

  * This method works only when connected to the main trade server. Otherwise, error [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned.
  * When calling the method, a check is made whether the group already exists. The key field for comparison is the name of the group (including the path). If such a group already exists, its settings are updated.
  * Before adding, the correctness of the record is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.
  * [The manager account](webapi_rest_authentication.htm#client_start) must have rights to connect as an administrator and edit group configurations. Otherwise, error code [MT_RET_ERR_PERMISSIONS](retcodes_common.md "Common errors") is returned.
  * To enable a newly added group, [restart the main trade server](net_serverrestart.md "ServerRestart").
