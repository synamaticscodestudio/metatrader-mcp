# PositionGet (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Positions ](php_position.md "Positions")/ PositionGet | [](php_position.md "Positions") [](php_positiongettotal.md "PositionGetTotal") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::PositionGet
Get a client's trade position by the symbol.
MTAPIRES MTWebAPI::PositionGet( int $login, // Login string $symbol, // Symbol MTPosition &$position // Position )  
---  
Parameters
$login
[in] The login of a client.
$symbol
[in] The name of the symbol, for which you need to get a position.
&$position
[out] The MTPosition structure that describes a trade position. Description of the structure parameters is provided in the ["Data Structure"](webapi_position_data_structure.md "Data Structure") section.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The string specifying the symbol name must be passed in the UTF-8 format.