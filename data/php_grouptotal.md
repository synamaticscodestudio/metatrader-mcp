# GroupTotal (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Groups ](php_group.md "Groups")/ GroupTotal | [](php_groupdelete.md "GroupDelete") [](php_groupnext.md "GroupNext") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::GroupTotal
Get the number of groups created on the trade server.
MTAPIRES MTWebAPI::GroupTotal( int &$total // Number of groups )  
---  
Parameters
&$total
[out] The number of groups on the server.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.