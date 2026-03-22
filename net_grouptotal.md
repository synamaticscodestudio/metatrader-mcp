# GroupTotal (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Groups ](net_group.md "Groups")/ GroupTotal | [](net_groupdelete.md "GroupDelete") [](net_groupnext.md "GroupNext") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.GroupTotal
Get the number of groups created on the trade server.
MTRetCode MT5WebAPI.GroupTotal( out int total // The number of groups )  
---  
Parameters
total
[out] The number of groups on the server.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.