# PositionSplit (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Positions ](serverapi_trading_position.md "Positions")/ PositionSplit | [](imtserverapi_positionfix.md "PositionFix") [](serverapi_trading_request.md "Trade Requests") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::PositionSplit
Split trading positions. For details please read the [MetaTrader 5 Manager Help](https://support.metaquotes.net/en/docs/mt5/manager/position_split).
C++
MTAPIRES IMTServerAPI::PositionSplit( UINT64* tickets, // Tickets of positions const UINT tickets_total, // Number of tickets const double* adjustments, // Balance adjustments const UINT new_shares, // Number of new shares const UINT old_shares, // Number of old shares const UINT round_rule_price, // Price rounding rule const UINT round_rule_volume, // Volume rounding rule const UINT flags, // Additional split options MTAPIRES* results // Array of results )  
---  
.NET
MTRetCode CIMTServerAPI.PositionSplit( ulong tickets, // Tickets of positions double adjustments, // Balance adjustments uint new_shares, // Number of new shares uint old_shares, // Number of old shares uint  round_rule_price, // Price rounding rule uint round_rule_volume, // Volume rounding rule uint flags, // Additional split options out MTRetCode[] results // Array of results )  
---  
Parameters
tickets
[in] An array of tickets of the positions for which you want to perform the split operation.
ticket_total
[in] The number of tickets in the 'tickets' array.
adjustments
[in] Adjustment calculation mode:
  * To delegate adjustment calculation to the server, pass nullptr.
  * To use custom adjustment values, pass the filled 'double' array. the array must be filled in accordance with the passed array of position tickets.
  * If no adjustment should be calculated, pass an array of zeros.

new_shares
[in] Number of new shares. Shares are split/consolidated in a certain ratio, while their prices are also converted accordingly.
old_shares
[in] Number of old shares. Shares are split/consolidated in a certain ratio, while their prices are also converted accordingly.
round_rule_price
[in] The price rounding rule in case the number of digital places of a new price exceeds the value set in the symbol's Digits parameter ([IMTConSymbol::Digits](imtconsymbol_digits.md "Digits")). The following three options are available:
  * 0 � standard rounding
  * 1 � round down
  * 2 � round up

For example, when transforming the price of 35.15 with the ratio of 2:1, we obtain 17.575. When rounded down, the final price is 17.57, when rounded up, it is 17.58. The "Standard" rounding option (standard rounding to the nearest integer) is available as well. For example, if the Digits is 2, the rounding is performed as follows: 17.234 -> 17.23, 17.235 -> 17.24.
round_rule_volume
[in] The volume rounding rule in case the client will have a fractional number of shares after the split. The following three options are available:
  * 0 � standard rounding
  * 1 � round down
  * 2 � round up

For example, dividing 35 stocks using the 3:2 ratio results in 52.5 stocks. In this case, the number may be rounded down (against a trader) or up (in a trader's favor).
flags
[in] Additional split options as flags:
  * 1 � it is recommended to clear trading positions' stop levels to avoid their activation after a split. This can be done by setting flag 1.
  * 2 � if the split operation will cause a position volume to become less than one contract, the split operation will be not performed. You can close such positions automatically by using this flag.

results
[in] An array of each position split results.
Return Value
An indication of successful command setting is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a corresponding error code will be returned.