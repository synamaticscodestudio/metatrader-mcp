# GroupDelete (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Groups ](net_group.md "Groups")/ GroupDelete | [](net_groupadd.md "GroupAdd") [](net_grouptotal.md "GroupTotal") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.GroupDelete
Delete a group configuration with the specified name.
MTRetCode MT5WebAPI.GroupDelete( string name // Group name )  
---  
Parameters
name
[in] The name of the group that you want to delete.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
  * This method works only when connected to the main trade server. Otherwise, error [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned.

  * [The manager account](webapi_rest_authentication.htm#client_start) must have rights to connect as an administrator and edit group configurations. Otherwise, error code [MT_RET_ERR_PERMISSIONS](retcodes_common.md "Common errors") is returned.
  * You cannot delete a group which contains at least one account.
