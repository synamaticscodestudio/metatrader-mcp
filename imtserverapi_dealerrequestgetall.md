# DealerRequestGetAll (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Request Processing ](serverapi_dealer.md "Processing of requests")/ DealerRequestGetAll | [](imtserverapi_dealerrequestget.md "DealerRequestGet") [](serverapi_chart.md "History Data") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DealerRequestGetAll
Gets all trade requests from the trade queue available to the specified manager account.
MTAPIRES IMTServerAPI::DealerRequestGetAll( const UINT64 dealer, // Dealer's login IMTRequest* requests // An object of the array of trade requests )  
---  
Parameters
dealer
[in] The login of the manager account. Corresponds to [IMTConManager::Login](imtconmanager_login.md "Login").
requests
[out] An object of the array of trade requests. The object must first be created using the [IMTServerAPI::TradeRequestCreateArray](imtserverapi_traderequestcreatearray.md "TradeRequestCreateArray") method.
Return value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method can only be used after a call of [IMTServerAPI::DealerStart](imtserverapi_dealerstart.md "DealerStart") for the appropriate manager account.
Unlike [IMTServerAPI::DealerGet](imtserverapi_dealerget.md "DealerGet") and [IMTServerAPI::DealerLock](imtserverapi_dealerlock.md "DealerLock"), this method does not block requests in the queue. It only passes information about requests.
Each manager account can access its own queue of trade requests, which is synchronized with the general queue of the trade server. The manager can only see the requests from clients from allowed groups ([IMTConManager::Group*](imtconmanager_groupadd.md "GroupAdd")) and only those requests, which are routed to him according to [routing rules](imtconroute.md "IMTConRoute").