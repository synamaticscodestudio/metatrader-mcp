# OnChartSplit (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Price Data ](reference_ticks.md "Price Data") / [ IMTChartSink ](imtchartsink.md "IMTChartSink")/ OnChartSplit | [](imtchartsink_enum.md "Enumerations") [](imtchartsink_hookchartsplit.md "HookChartSplit") |
| --- | --- | --- |
| --- | --- |

IMTChartSink::OnChartSplit
Price data split event handler For further details about the split operation please refer to [MetaTrader 5 Administrator Help](https://support.metaquotes.net/ru/docs/mt5/platform/administration/admin_charts/split_charts).
virtual void IMTChartSink::OnChartSplit( LPCWSTR symbol, // Symbol const double new_shares, // Number of new shares const double old_shares, // Number of old shares const UINT rounding_rule, // Rounding rule const INT64 datetime_from, // Beginning of split range const INT64 datetime_to // End of split range )  
---  
Parameters
news
[in] The symbol for which the split is performed.
new_shares
[in] Number of new shares. Shares are split/consolidated in a certain ratio, and their prices are also converted accordingly.
old_shares
[in] Number of old shares. Shares are split/consolidated in a certain ratio, and their prices are also converted accordingly.
rounding_rule
[in] The rounding rule in case the number of decimal places of a new price after conversion exceeds the value set in the symbol's Digits parameter ([IMTConSymbol::Digits](imtconsymbol_digits.md "Digits")). Specified by a value from the [IMTChartSink::EnSplitRounding](imtchartsink_enum.htm#ensplitrounding) enumeration.
For example, when transforming the price of 35.15 with the ratio of 2:1, we obtain 17.575. When rounded down, the final price is 17.57, when rounded up, it is 17.58. The "Standard" rounding option (standard rounding to the nearest integer) is also available. For example, if the Digits is 2, the rounding is performed as follows: 17.234 -> 17.23, 17.235 -> 17.24.
datetime_from
[in] The beginning date of the time interval in which split will be performed. If the parameter is not set, the split will be performed for the entire symbol price history.
datetime_to
[in] The end date of the time interval in which split will be performed. If the parameter is not set, the split will be performed for the entire symbol price history.
Note
The method is only used in the MetaTrader 5 Server API.