# DealerLock (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Request Processing ](serverapi_dealer.md "Processing of requests")/ DealerLock | [](imtserverapi_dealerget.md "DealerGet") [](imtserverapi_dealeranswer.md "DealerAnswer") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DealerLock
Gets a request with the specified ID for processing.
MTAPIRES IMTServerAPI::DealerLock( const UINT64 dealer, // Dealer's login const UINT id, // Trade request ID IMTRequest* request // An object of a trade request )  
---  
Parameters
dealer
[in] The login of the manager account, which will be used to process the request. Corresponds to [IMTConManager::Login](imtconmanager_login.md "Login").
id
[in] Trade request ID. The [IMTRequest::Id](imtrequest_id.md "ID") value is used as the identifier. A request with the specified identifier must exist in the queue.
request
[out] The object of a trade request. The object must first be created using the [IMTServerAPI::TradeRequestCreate](imtserverapi_traderequestcreate.md "TradeRequestCreate") method.
Return value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code. Code MT_RET_OK_NONE means that the request is no longer available on the trade server. For example, it could have been captured by another dealer or application.
Note
The method can only be used after a call of [IMTServerAPI::DealerStart](imtserverapi_dealerstart.md "DealerStart") for the appropriate manager account.
The request received via this method is marked by the server as a request passed to a certain manager, so the same request cannot be received by another manager. Then the server waits for the request to be processed using the [IMTServerAPI::DealerAnswer](imtserverapi_dealeranswer.md "DealerAnswer") method.
Such a request must be processed within three minutes. Otherwise, the server will automatically delete it, and the client will receive a rejection.
Each manager account can access its own queue of trade requests, which is synchronized with the general queue of the trade server. The manager can only see the requests from clients from allowed groups ([IMTConManager::Group*](imtconmanager_groupadd.md "GroupAdd")) and only those requests, which are routed to him according to [routing rules](imtconroute.md "IMTConRoute").