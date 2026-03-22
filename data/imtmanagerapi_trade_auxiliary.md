# Auxiliary Functions (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Activity ](imtmanagerapi_trade_operations.md "Trading Functions")/ Auxiliary Functions | [](imtmanagerapi_requestgetall.md "RequestGetAll") [](imtmanagerapi_tradeprofit.md "TradeProfit") |
| --- | --- | --- |
| --- | --- |

Auxiliary Functions
Functions described in this section are auxiliary. They allow calculating profit and margin requirements for positions as well as calculating conversion rates for currencies.
| Functions | Purpose |
| --- | --- |
| --- | --- |
| [TradeProfit](imtmanagerapi_tradeprofit.md "TradeProfit") | Calculates profit for the specified trading conditions. |
| [TradeProfitExt](imtmanagerapi_tradeprofitext.md "TradeProfitExt") | Calculates profit for the specified trading conditions using extended volume accuracy. |
| [TradeRateBuy](imtmanagerapi_traderatebuy.md "TradeRateBuy") | Calculates the conversion rate for a Buy trade. |
| [TradeRateSell](imtmanagerapi_traderatesell.md "TradeRateSell") | Calculates the conversion rate for a Sell trade. |
| [TradeMarginCheck](imtmanagerapi_trademargincheck.md "TradeMarginCheck") | Checks the availability of the margin required for the execution of this order. |
| [TradeMarginCheckExt](imtmanagerapi_trademargincheckext.md "TradeMarginCheckExt") | Checks the availability of the margin required for the execution of this order with the indication of increased accuracy volume. |

To ensure proper operation of these functions, the Manager API needs to have access to actual quotes of financial instruments used in calculations. To receive quotes of an instrument, add it to the list of selected symbols using the [IMTManagerAPI::SelectedAdd](imtmanagerapi_selectedadd.md "SelectedAdd") or [IMTManagerAPI::SelectedAddAll](imtmanagerapi_selectedaddall.md "SelectedAddAll") method. Please note that these methods work asynchronously, i.e. they only send a request for a subscription to the symbols. The prices do not become available to the application immediately after the call. To make sure that the application uses actual prices, call auxiliary functions after receiving the [IMTTickSink::OnTick](imtticksink_ontick.md "OnTick") event for the corresponding symbol. To receive such events, you need to subscribe to them using the [IMTManagerAPI::TickSubscribe](imtmanagerapi_ticksubscribe.md "TickSubscribe") method.