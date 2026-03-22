# TradeRateBuy (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Trade Requests ](serverapi_trading_request.md "Trade Requests")/ TradeRateBuy | [](imtserverapi_tradeprofitext.md "TradeProfitExt") [](imtserverapi_traderatesell.md "TradeRateSell") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TradeRateBuy
Calculate the conversion rate for a Buy trade.
MTAPIRES IMTServerAPI::TradeRateBuy( LPCWSTR base, // Name of the purchased currency LPCWSTR currency, // Name of the calculation currency double& rate, // Conversion rate LPCWSTR group=NULL, // Group name LPCWSTR symbol=NULL, // Symbol name const double price=0 // Price )  
---  
Parameters
base
[in] Name of the base (purchased) currency. Three-letter abbreviation for the currency, for example, EUR.
currency
[in] The name of the currency that is used to pay for the purchased currency. Three-letter abbreviation for the currency, for example, USD.
rate
[out] The calculated conversion rate of buying the 'base' currency for the 'currency' currency.
group=NULL
[in] The name of the group of clients, for which the calculations are performed. If the group is specified, then the conversion rate is calculated using the market prices, taking into account spread [adjustment](imtcongroupsymbol_spreaddiff.md "SpreadDiff") for this group. If a group is not specified, market prices are used.
symbol=NULL
[in] The name of the symbol that should be taken into account when calculating the conversion rate. If a trading symbol with the name specified in the symbol parameter is used for calculating the conversion rate, then the 'price' price will be used as the price of this symbol.
If the symbol parameter is NULL, current market prices of the symbol (including spread adjustment for this client group) will be used for conversion.
price=0
[in] The price of the symbol specified in the symbol parameter, which will be used for conversion instead of the current market price. This parameter is ignored for the symbols with the [IMTConSymbol::TRADE_FLAGS_PROFIT_BY_MARKET](imtconsymbol_enum.htm#entradeflags) flag enabled. The market price is always used for such symbols.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a corresponding error code is returned.
Note
This method calculates the rate of buying the 'base' currency for the 'currency' currency.