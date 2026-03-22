# DealerStop (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Request Processing ](serverapi_dealer.md "Processing of requests")/ DealerStop | [](imtserverapi_dealerstart.md "DealerStart") [](imtserverapi_dealerget.md "DealerGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DealerStop
Stops processing requests via the specified manager account.
MTAPIRES IMTServerAPI::DealerStop( const UINT64 dealer, // Dealer's login IMTRequestSink* request // A pointer to the IMTRequestSink object )  
---  
Parameters
dealer
[in] The login of the manager account, dealing through which should be stopped. Corresponds to [IMTConManager::Login](imtconmanager_login.md "Login").
request
[in] A pointer to the [IMTRequestSink](imtrequestsink.md "IMTRequestSink") object, which was previously passed to [IMTServerAPI::DealerStart](imtserverapi_dealerstart.md "DealerStart").
Return value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The queue of requests is available to the plugin until the call of IMTServerAPI::DealerStop for each of the dealers, who were previously connected via [IMTServerAPI::DealerStart](imtserverapi_dealerstart.md "DealerStart"). For example, if the plugin starts processing requests on behalf of four different dealers, and then completes the operation of three of them, the plugin will continue to receive events.