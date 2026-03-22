# GroupNext (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Groups ](php_group.md "Groups")/ GroupNext | [](php_grouptotal.md "GroupTotal") [](php_groupget.md "GroupGet") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::GroupNext
Get the group configuration by its index in the list of groups of the platform.
MTAPIRES MTWebAPI::GroupNext( int $pos, // Group position MTConGroup &$group // Group configuration )  
---  
Parameters
$pos
[in] Position of a group, starting with 0.
&$group
[out] The MTConGroup structure that describes the group configuration. Description of the structure parameters is provided in the ["Data Structure"](webapi_group_data_format.md "Data Structure") section.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.