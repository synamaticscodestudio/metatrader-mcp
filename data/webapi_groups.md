# Groups (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases")/ Groups | [](webapi_time_set.md "Update Settings") [](webapi_group_data_format.md "Data Structure") |
| --- | --- | --- |
| --- | --- |

Groups
The Web API provides the following requests for receiving settings of client groups on the server:
| Request | Description |
| --- | --- |
| --- | --- |
| [/api/group/add](webapi_group_add.md "Add") | Create/edit a client group on the server. |
| [/api/group/add_batch](webapi_group_add_batch.md "Add Multiple") | Create/edit multiple client groups on the server. |
| [/api/group/delete](webapi_group_delete.md "Delete") | Delete a client group from the server. |
| [/api/group/delete_batch](webapi_group_delete_batch.md "Delete Multiple") | Delete multiple client groups from the server. |
| [/api/group/shift](webapi_group_shift.md "Shift") | Change the position of a group configuration in the list. |
| [/api/group/total](webapi_group_total.md "Get Total") | Get the total number of groups available on the server. |
| [/api/group/list](webapi_group_list.md "Get List") | Get the list of groups available on the trade server. |
| [/api/group/next](webapi_group_next.md "Get by Index") | Get the configuration of one or more groups by index in the list. |
| [/api/group/get](webapi_group_get.md "Get by Name or Mask") | Get the group configuration by the name or mask. |

The format, in which the data about group configuration are passed, are described in the ["Data Structure"](webapi_group_data_format.md "Data Structure") section.