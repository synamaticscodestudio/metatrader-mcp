# HookTradeSplit (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Interface of Trade Events ](imttradesink.md "Interface of Trade Events")/ HookTradeSplit | [](imttradesink_hooktradeexecution.md "HookTradeExecution") [](imtendofdaysink.md "Interface of End-of-Day Events") |
| --- | --- | --- |
| --- | --- |

IMTTradeSink::HookTradeSplit
A hook for the [trading position split](imtserverapi_positionsplit.md "PositionSplit").
virtual MTAPIRES IMTTradeSink::HookTradeSplit( const UINT shares_new, // Number of new shares const UINT shares_old, // Number of old shares const UINT round_prices, // Price rounding rule const UINT round_volumes,// Volume rounding rule const UINT flags, // Additional split options const double adjustment, // Adjustments const IMTConGroup* group, // A pointer to the group configuration object const IMTConSymbol* symbol, // A pointer to the symbol configuration object IMTPosition* position_old, // A pointer to the position object IMTPosition* position_new, // A pointer to the position object )  
---  
Parameters
shares_new
[in] Number of new shares.
shares_old
[in] Number of old shares.
round_prices
[in] The price rounding rule in case the number of digital places of a new price exceeds the value set in the symbol's Digits parameter ([IMTConSymbol::Digits](imtconsymbol_digits.md "Digits")). The following three options are available:
  * 0 — standard rounding
  * 1 — round down
  * 2 — round up

For example, when transforming the price of 35.15 with the ratio of 2:1, we obtain 17.575. When rounded down, the final price is 17.57, when rounded up, it is 17.58. The "Standard" rounding option (standard rounding to the nearest integer) is available as well. For example, if the Digits is 2, the rounding is performed as follows: 17.234 -> 17.23, 17.235 -> 17.24.
round_volumes
[in] The volume rounding rule in case the client will have a fractional number of shares after the split. The following three options are available:
  * 0 — standard rounding
  * 1 — round down
  * 2 — round up

For example, dividing 35 stocks using the 3:2 ratio results in 52.5 stocks. In this case, the number may be rounded down (against a trader) or up (in a trader's favor).
flags
[in] Additional split options in the form of flags:
  * 1 — clear trading position stop levels to avoid triggering after split.
  * 2 — if the split operation would cause the position volume to become less than one contract, the split operation is not performed. If this flag is set, such positions will be automatically closed.

adjustment
[in] The size of the adjustment (passed by the user at split start or calculated by the server). By the time of the split, the adjustment, if any, has already been charged. Therefore, if the split is canceled in the hook, the adjustment will be transferred from the account back by an additional balance operation.
group
[in] A pointer to the [group configuration](config_group.md "Groups") object of the client for whose position the split is performed.
symbol
[in] A pointer to the [trading symbol configuration](config_symbol.md "Symbols") object for the position of which the split is performed.
position_old
[in][out] A pointer to the object describing the [trading position](imtposition.md "IMTPosition") state before the split.
position_new
[in][out] A pointer to the object describing the [trading position](imtposition.md "IMTPosition") state after the split. New prices and new volumes are set for this position in accordance with the split parameters.
Return Value
If confirmed, return [MT_RET_OK](retcodes_successful.md "Successful completion"). Otherwise the split will fail with a response code returned from the hook. If the response code is different from MT_RET_OK, the position is not split.
Note
The hook is called separately for each position before split.