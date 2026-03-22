# PositionGetTotal (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Positions ](php_position.md "Positions")/ PositionGetTotal | [](php_positionget.md "PositionGet") [](php_positiongetpage.md "PositionGetPage") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::PositionGetTotal
Get the number of open positions of a client by the login.
MTAPIRES MTWebAPI::PositionGetTotal( int $login, // Login int $total // Number of positions )  
---  
Parameters
$login
[in] The login of a client.
$total
[out] The number of currently open positions of the client with the specified login.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.