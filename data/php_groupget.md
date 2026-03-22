# GroupGet (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Groups ](php_group.md "Groups")/ GroupGet | [](php_groupnext.md "GroupNext") [](php_symbol.md "Symbols") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::GroupGet
Get the group configuration by its name.
MTAPIRES MTWebAPI::GroupGet( string $name, // Group name MTConGroup &$group // Group configuration )  
---  
Parameters
$name
[in] Group name.
&$group
[out] The MTConGroup structure that describes the group configuration. Description of the structure parameters is provided in the ["Data Structure"](webapi_group_data_format.md "Data Structure") section.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The string specifying the group name must be passed in the UTF-8 format.