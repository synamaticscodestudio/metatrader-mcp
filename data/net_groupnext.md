# GroupNext (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Groups ](net_group.md "Groups")/ GroupNext | [](net_grouptotal.md "GroupTotal") [](net_groupget.md "GroupGet") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.GroupNext
Get the group configuration by its index in the list of groups of the platform.
MTRetCode MT5WebAPI.GroupNext( uint pos, // Group position out MTConGroup conGroup // Group configuration )  
---  
Parameters
pos
[in] Position of a group, starting with 0.
conGroup
[out] The MTConGroup structure that describes the group configuration. Description of the structure parameters is provided in the ["Data Structure"](webapi_group_data_format.md "Data Structure") section.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.