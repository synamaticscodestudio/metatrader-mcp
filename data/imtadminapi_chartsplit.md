# ChartSplit (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ History Data ](imtadminapi_charts.md "History Data Functions")/ ChartSplit | [](imtadminapi_chartreplace.md "ChartReplace") [](imtadminapi_tick.md "Functions") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ChartSplit
Split of the symbol's bar history. For details please read the [MetaTrader 5 Administrator Help files](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_charts/split_charts).
C++
MTAPIRES IMTAdminAPI::ChartSplit( LPCWSTR symbol, // Symbol const UINT new_shares, // Number of new shares const UINT old_shares, // Number of old shares const UINT rounding_rule, // Rounding rule const INT64 datetime_from, // Beginning of interval for split const INT64 datetime_to // End of interval for split )  
---  
.NET
MTRetCode CIMTAdminAPI.ChartSplit( string symbol, // Symbol uint new_shares, // Number of new shares uint old_shares, // Number of old shares uint rounding_rule, // Rounding rule long datetime_from, // Beginning of interval for split long datetime_to // End of interval for split )  
---  
Parameters
symbol
[in] The symbol for which you want to run split.
new_shares
[in] Number of new shares. Shares are split/consolidated in a certain ratio, while their prices are also converted accordingly.
old_shares
[in] Number of old shares. Shares are split/consolidated in a certain ratio, while their prices are also converted accordingly.
rounding_rule
[in] The rounding rule in case the number of digital places of a new price exceeds the value set in the symbol's Digits parameter ([IMTConSymbol::Digits](imtconsymbol_digits.md "Digits")). The following three options are available:
  * 0 — standard rounding
  * 1 — round down
  * 2 — round up

For example, when transforming the price of 35.15 with the ratio of 2:1, we obtain 17.575. When rounded down, the final price is 17.57, when rounded up, it is 17.58. The "Standard" rounding option (standard rounding to the nearest integer) is available as well. For example, if the Digits is 2, the rounding is performed as follows: 17.234 -> 17.23, 17.235 -> 17.24.
datetime_from
[in] The beginning date of the time interval in which split will be performed. If the parameter is not set, the split will be performed for the entire symbol price history.
datetime_to
[in] The end date of the time interval in which split will be performed. If the parameter is not set, the split will be performed for the entire symbol price history.
Return Value
An indication of successful command setting is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method is asynchronous and receiving of the MT_RET_OK response does not mean that the split has completed. The operation can take a long time.
If a split operation is running on the server has already split the specified tool, calling this method will not interrupt this process and will not start a new split.
The method only splits the symbol's bar history. Separate operations are provided for the split of trading positions and of the tick history.