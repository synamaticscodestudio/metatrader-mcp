# TickLast (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Prices ](php_tick.md "Prices")/ TickLast | [](php_tick.md "Prices") [](php_ticklastgroup.md "TickLastGroup") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::TickLast
Get the current prices of symbols.
MTAPIRES MTWebAPI::TickLast( string $symbol, // Symbols MTTick $&ticks // Array of quotes )  
---  
Parameters
$symbol
[in] Comma separated symbols, the prices of which should be received. You may use the mask "*" and the negation sign "!" to specify groups of symbols. For example:
  * EURUSD,USDJPY — get quotes for symbols EURUSD and USDJPY.
  * Forex\Major*, GOLD — get quotes of all symbols from the Major subgroup and quotes of GOLD.
  * Forex\Crosses*,!AUDUSD — get quotes of all symbols of the Crosses subgroup except AUDUSD.
  * Forex\Major\EUR* — get quotes of all symbols with the basic currency EUR from the Major subgroup.

$&ticks
[out] An array of MTick objects that describe ticks. Tick parameters are described in section ["Data Structure"](webapi_tick_data_structure.md "Data Structure").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
A mask can be used only when specifying the full path to a symbol or group. For example, you can't specify "USD*", the correct variant is "Forex\Major\USD*".
You can omit specification of the path to a symbol only if you enter its full name. For example, USDCAD.
The string specifying the symbols must be passed in the UTF-8 format.