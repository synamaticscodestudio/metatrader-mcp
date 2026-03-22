# GroupDelete (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Groups ](php_group.md "Groups")/ GroupDelete | [](php_groupadd.md "GroupAdd") [](php_grouptotal.md "GroupTotal") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::GroupDelete
Delete a group configuration with the specified name.
MTAPIRES MTWebAPI::GroupDelete( string $name // Group name )  
---  
Parameters
$name
[in] The name of the group that you want to delete.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
  * This method works only when connected to the main trade server. Otherwise, error [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned.

  * [The manager account](webapi_rest_authentication.htm#client_start) must have rights to connect as an administrator and edit group configurations. Otherwise, error code [MT_RET_ERR_PERMISSIONS](retcodes_common.md "Common errors") is returned.
  * You cannot delete a group which contains at least one account. At an attempt to delete, the error code [MT_RET_CFG_NOT_EMPTY](retcodes_configs.md "Configuration Management") is returned.

  * You cannot delete the last manager group on a server. At an attempt to delete, the error code [MT_RET_CFG_LAST_ADMIN_GROUP](retcodes_configs.md "Configuration Management") is returned.
  * If a group with the specified name is not found, the error code [MT_RET_NOTFOUND](retcodes_common.md "Common errors") is returned.
  * The string specifying the group name must be passed in the UTF-8 format.
