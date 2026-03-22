# DealerGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Request Processing ](serverapi_dealer.md "Processing of requests")/ DealerGet | [](imtserverapi_dealerstop.md "DealerStop") [](imtserverapi_dealerlock.md "DealerLock") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DealerGet
Gets the next request for processing. The method captures requests from the queue in the same order they are received from clients.
MTAPIRES IMTServerAPI::DealerGet( const UINT64 dealer, // Dealer's login IMTRequest* request // An object of a trade request )  
---  
Parameters
dealer
[in] The login of the manager account, which will be used to process the request. Corresponds to [IMTConManager::Login](imtconmanager_login.md "Login").
request
[out] The object of a trade request. The object must first be created using the [IMTServerAPI::TradeRequestCreate](imtserverapi_traderequestcreate.md "TradeRequestCreate") method.
Return value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method can only be used after a call of [IMTServerAPI::DealerStart](imtserverapi_dealerstart.md "DealerStart") for the appropriate manager account.
The request received via this method is marked by the server as a request passed to a certain manager, so the same request cannot be received by another manager. Then the server waits for the request to be processed using the [IMTServerAPI::DealerAnswer](imtserverapi_dealeranswer.md "DealerAnswer") method.
Such a request must be processed within three minutes. Otherwise, the server will automatically delete it, and the client will receive a rejection. A captured request cannot be returned to the queue.
Each manager account can access its own queue of trade requests, which is synchronized with the general queue of the trade server. The manager can only see the requests from clients from allowed groups ([IMTConManager::Group*](imtconmanager_groupadd.md "GroupAdd")) and only those requests, which are routed to him according to [routing rules](imtconroute.md "IMTConRoute").