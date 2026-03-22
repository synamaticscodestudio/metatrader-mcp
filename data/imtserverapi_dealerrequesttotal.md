# DealerRequestTotal (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Request Processing ](serverapi_dealer.md "Processing of requests")/ DealerRequestTotal | [](imtserverapi_dealerexecution.md "DealerExecution") [](imtserverapi_dealerrequestnext.md "DealerRequestNext") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DealerRequestTotal
Gets the total number of requests in the trade queue available to the specified manager account.
UINT IMTServerAPI::DealerRequestTotal( const UINT64 dealer // Dealer's login )  
---  
dealer
[in] The login of the manager account. Corresponds to [IMTConManager::Login](imtconmanager_login.md "Login").
Return value
The number of trade requests in the queue.
Note
The method can only be used after a call of [IMTServerAPI::DealerStart](imtserverapi_dealerstart.md "DealerStart") for the appropriate manager account.
Each manager account can access its own queue of trade requests, which is synchronized with the general queue of the trade server. The manager can only see the requests from clients from allowed groups ([IMTConManager::Group*](imtconmanager_groupadd.md "GroupAdd")) and only those requests, which are routed to him according to [routing rules](imtconroute.md "IMTConRoute").