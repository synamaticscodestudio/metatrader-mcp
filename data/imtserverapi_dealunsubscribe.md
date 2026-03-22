# DealUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Deals ](serverapi_trading_deal.md "Deals")/ DealUnsubscribe | [](imtserverapi_dealsubscribe.md "DealSubscribe") [](imtserverapi_dealadd.md "DealAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DealUnsubscribe
Unsubscribe from the events and hooks associated with changes in the database of deals.
MTAPIRES IMTServerAPI::DealUnsubscribe( IMTDealSink* sink // A pointer to the IMTDealSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTDealSink](imtdealsink.md "IMTDealSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This is a pair method to [IMTServerAPI::DealSubscribe](imtserverapi_dealsubscribe.md "DealSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.