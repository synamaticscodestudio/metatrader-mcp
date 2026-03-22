# Data Structure (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Managers ](webapi_manager.md "Managers")/ Data Structure | [](webapi_manager.md "Managers") [](webapi_manager_add.md "Add") |
| --- | --- | --- |
| --- | --- |

Data Structure
A manager configuration is passed in JSON format in response to the [/api/manager/add](webapi_manager_add.md "Add"), [/api/manager/next](webapi_manager_next.md "Get by Index") and [/api/manager/get](webapi_manager_get.md "Get by Login") requests.
| Parameter | Type | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| Login | Integer | The login of a manager. |
| Name | String | The name of the manager. A read-only field. Corresponds to the value of the appropriate field of the [user](webapi_user_data_structure.md "Data Structure") based on whose record the manager is created. |
| Mailbox | String | The name of the manager's mailbox in the internal mailing system. |
| Server | Integer | The ID of the trade server, to which the manager belongs. |
| Right | Array | Manager permissions in the form of an array [1,1,0,0,...]. 1 — permission is granted, 0 — permission is not granted. The full list of permissions is described in the [EnManagerRights](imtconmanager_enum.htm#enmanagerrights) enumeration. |
| RequestLimitLogs | Integer | The time period of system logs that are available to a manager. Specified as a value of the [EnManagerLimit](imtconmanager_enum.htm#enmanagerlimit) enumeration. |
| RequestLimitReports | Integer | The time period of reports that are available to a manager. Specified as a value of the [EnManagerLimit](imtconmanager_enum.htm#enmanagerlimit) enumeration. |
| Groups | Array | [Account groups](webapi_manager_data_structure.htm#groups) managed by the manager. |
| Access | Array | [Ranges of IP addresses](webapi_manager_data_structure.htm#ip), from which a manager is allowed to connect to the platform. |

Groups
| Parameter | Type | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| Group | String | The path to the group. |

IP addresses
| Parameter | Type | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| From | String | The beginning of the range of IP addresses, from which a manager account can connect. |
| To | String | The end of the range of IP addresses, from which a manager account can connect. |