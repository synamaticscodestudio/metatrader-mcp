# TradeRateSell (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Activity ](imtmanagerapi_trade_operations.md "Trading Functions") / [ Auxiliary Functions ](imtmanagerapi_trade_auxiliary.md "Auxiliary Functions")/ TradeRateSell | [](imtmanagerapi_traderatebuy.md "TradeRateBuy") [](imtmanagerapi_trademargincheck.md "TradeMarginCheck") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::TradeRateSell
Calculate the conversion rate for a Sell trade.
C++
MTAPIRES IMTManagerAPI::TradeRateSell( LPCWSTR base, // Name of the sold currency LPCWSTR currency, // Name of the calculation currency double& rate, // Conversion rate LPCWSTR group=NULL, // Group name LPCWSTR symbol=NULL, // Symbol name const double price=0 // Price )  
---  
.NET
MTRetCode CIMTManagerAPI.TradeRateSell( string base, // Name of the sold currency string currency, // Name of the calculation currency double rate, // Conversion rate string group=NULL, // Group name string symbol=NULL, // Symbol name double price=0 // Price )  
---  
Python
ManagerAPI.TradeRateSell( base, # Name of the sold currency currency, # Name of the calculation currency group, # Group name symbol, # Symbol name price # Price )  
---  
Parameters
base
[in] Name of the base (sold) currency. Three-letter abbreviation for the currency, for example, EUR.
currency
[in] The name of the currency that is used to pay for the sold currency. Three-letter abbreviation for the currency, for example, USD.
rate
[out] The calculated conversion rate of selling the 'base' currency for the 'currency' currency.
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
This method calculates the rate of selling the 'base' currency for the 'currency' currency.
For the method to operate, [pumping modes](imtmanagerapi_enpumpmodes.md "Pumping Mode") PUMP_MODE_ORDERS and PUMP_MODE_POSITIONS must be enabled.