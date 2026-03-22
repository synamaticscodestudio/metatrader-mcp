# DealerRequestGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Request Processing ](serverapi_dealer.md "Processing of requests")/ DealerRequestGet | [](imtserverapi_dealerrequestnext.md "DealerRequestNext") [](imtserverapi_dealerrequestgetall.md "DealerRequestGetAll") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DealerRequestGet
Gets a trade request with the specified identifier.
MTAPIRES IMTServerAPI::DealerRequestGet( const UINT64 dealer, // Dealer's login const UINT id, // Trade request ID IMTRequest* request // An object of a trade request )  
---  
Parameters
dealer
[in] The login of the manager account. Corresponds to [IMTConManager::Login](imtconmanager_login.md "Login").
id
[in] Trade request ID. [IMTRequest::Id](imtrequest_id.md "ID") is used as an identifier.
request
[out] The object of a trade request. The object must first be created using the [IMTManagerAPI::RequestCreate](imtmanagerapi_requestcreate.md "RequestCreate") method.
Return value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method can only be used after a call of [IMTServerAPI::DealerStart](imtserverapi_dealerstart.md "DealerStart") for the appropriate manager account.
Unlike [IMTServerAPI::DealerGet](imtserverapi_dealerget.md "DealerGet") and [IMTServerAPI::DealerLock](imtserverapi_dealerlock.md "DealerLock"), this method does not block a request in the queue. It only passes information about a request.
Each manager account can access its own queue of trade requests, which is synchronized with the general queue of the trade server. The manager can only see the requests from clients from allowed groups ([IMTConManager::Group*](imtconmanager_groupadd.md "GroupAdd")) and only those requests, which are routed to him according to [routing rules](imtconroute.md "IMTConRoute").