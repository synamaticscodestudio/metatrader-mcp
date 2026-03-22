# PositionGet (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Positions ](net_position.md "Positions")/ PositionGet | [](net_position.md "Positions") [](net_positiongettotal.md "PositionGetTotal") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.PositionGet
Get a client's trade position by the symbol.
MTRetCode MT5WebAPI.PositionGet( ulong login, // Login string symbol, // Symbol out MTPosition position // Position )  
---  
Parameters
login
[in] The login of a client.
symbol
[in] The name of the symbol, for which you need to get a position.
position
[out] The MTPosition structure that describes a trade position. Description of the structure parameters is provided in the ["Data Structure"](webapi_position_data_structure.md "Data Structure") section.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.