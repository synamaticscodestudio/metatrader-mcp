# DealerStart (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Request Processing ](serverapi_dealer.md "Processing of requests")/ DealerStart | [](serverapi_dealer.md "Processing of requests") [](imtserverapi_dealerstop.md "DealerStop") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DealerStart
Starts processing requests on behalf of the specified manager account.
MTAPIRES IMTServerAPI::DealerStart( const UINT64 dealer, // Dealer's login IMTRequestSink* request // A pointer to the IMTRequestSink object )  
---  
Parameters
dealer
[in] The login of the manager account, on whose behalf requests will be processed. Corresponds to [IMTConManager::Login](imtconmanager_login.md "Login").
request
[in] A pointer to the object that implements the [IMTRequestSink](imtrequestsink.md "IMTRequestSink") interface.
Return value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The manger account needs to have the dealing permission: [IMTConManager::RIGHT_TRADES_DEALER](imtconmanager_enum.htm#enmanagerrights).
After a successful call of the method, a queue of trade requests is downloaded to the plugin, and [events related to trade requests](imtrequestsink.md "IMTRequestSink") (OnRequestAdd, OnRequestUpdate, OnRequestDelete and OnRequestSync) start arriving.
After a successful call of this method, the [IMTRequestSink::OnRequestSync](imtrequestsink_onrequestsync.md "OnRequestSync") event is always called, which means that the request queue has been formed and the plugin can start processing requests.
The queue of requests is available to the plugin until the call of [IMTServerAPI::DealerStop](imtserverapi_dealerstop.md "DealerStop") for each of the dealers, who were previously connected via IMTServerAPI::DealerStart. For example, if the plugin starts processing requests on behalf of four different dealers, and then completes the operation of three of them, the plugin will continue to receive events.
The object at which 'sink' points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::DealerStop](imtserverapi_tradeunsubscribe.md "TradeUnsubscribe") or until the plugin is removed.