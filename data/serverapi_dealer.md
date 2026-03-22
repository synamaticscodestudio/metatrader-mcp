# Processing of requests (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade")/ Request Processing | [](imtserverapi_tradeaccountset.md "TradeAccountSet") [](imtserverapi_dealerstart.md "DealerStart") |
| --- | --- | --- |
| --- | --- |

Processing of requests
MetaTrader 5 Server API allows connecting to a queue of requests of a trade server, capture requests from this queue and process them on behalf of a manager account, similar to [Manager API](imtmanagerapi_dealing.md "Dealing").
To start operation, you need to call the [IMTServerAPI::DealerStart](imtserverapi_dealerstart.md "DealerStart") method, specifying the login of the manager, on whose behalf trade requests will be processed. You can connect multiple manager accounts by calling this method for each of them. These accounts must have the [IMTConManager:RIGHT_TRADES_DEALER](imtconmanager_enum.htm#enmanagerrights) permission.
After that, the plugin downloads the queue of requests for the manager (or managers) and calls the [IMTRequestSink::OnRequestSync](imtrequestsink_onrequestsync.md "OnRequestSync") event, which means that the queue has been downloaded. After that the plugin starts receiving events of changes in its queue: addition, update or deletion of requests ([IMTRequestSink](imtrequestsink.md "IMTRequestSink") methods).
  * The plugin does not have access to the entire queue of a trade server. Each plugin works with its own queue, which receives only those requests, which are available to connected managers. Each manager can only access the requests from clients from allowed groups ([IMTConManager::Group*](imtconmanager_groupadd.md "GroupAdd")) and only those requests, which are routed to him according to [routing rules](imtconroute.md "IMTConRoute"). Also, the manager only receives events related to available requests.
  * The queue of requests is available to the plugin until the call of [IMTServerAPI::DealerStop](imtserverapi_dealerstop.md "DealerStop") for each of the dealers, who were previously connected via [IMTServerAPI::DealerStart](imtserverapi_dealerstart.md "DealerStart"). For example, if the plugin starts processing requests on behalf of four different dealers, and then completes the operation of three of them, the plugin will continue to receive events.
  * Application of transactions associated with changes in the general server queue to the plugin queue, as well as notification of connected managers about these events are performed in one thread. In this regard, too long processing of events can cause a delay in the plugin queue. The longer the plugin returns control from events, the greater can be the difference between the status of the plugin queue and the general server queue. However, this will not slow down the operation of other plugins, because each plugin uses its own thread.

  
---  
To capture a request for processing use [IMTServerAPI::DealerGet](imtserverapi_dealerget.md "DealerGet") or [IMTServerAPI::DealerLock](imtserverapi_dealerlock.md "DealerLock"). After that call [IMTServerAPI::DealerAnswer](imtserverapi_dealeranswer.md "DealerAnswer") to respond to a captured request. The object of the confirmation [IMTConfirm](imtconfirm.md "IMTConfirm") is passed in this method, where it is specified how the request should be executed. For details on how to fill IMTConfirm for each type of request please see the [separate section](imtconfirm.htm#fill_confirmation). 
Requests are processed asynchronously. Once confirmed by a plugin, the request appears on the execution queue of the server. Use the [IMTRequestSink::OnRequestUpdate](imtrequestsink_onrequestupdate.md "OnRequestUpdate") handler to get the execution result. Request execution results are written to [IMTRequest::Result*](imtrequest_resultretcode.md "ResultRetcode") fields. To search for a required request, use its ID ([IMTRequest::ID](imtrequest_id.md "ID")).
Such a request must be processed within three minutes. Otherwise, the server will automatically delete it, and the client will receive a rejection.  
---  
The following request processing methods are available in MetaTrader 5 Server API:
| Features | Purpose |
| --- | --- |
| --- | --- |
| [DealerStart](imtserverapi_dealerstart.md "DealerStart") | Starts processing requests on behalf of the specified manager account. |
| [DealerStop](imtserverapi_dealerstop.md "DealerStop") | Stops processing requests via the specified manager account. |
| [DealerGet](imtserverapi_dealerget.md "DealerGet") | Gets the next request for processing. The method captures requests from the queue in the same order they are received from clients. |
| [DealerLock](imtserverapi_dealerlock.md "DealerLock") | Gets a request with the specified ID for processing. |
| [DealerAnswer](imtserverapi_dealeranswer.md "DealerAnswer") | A response to a trade request, which [IMTServerAPI::DealerGet](imtserverapi_dealerget.md "DealerGet") or [IMTServerAPI::DealerLock](imtserverapi_dealerlock.md "DealerLock") has received for processing. |
| [DealerExecution](imtserverapi_dealerexecution.md "DealerExecution") | Applies a [trade execution](imtexecution.md "IMTExecution"). |
| [DealerRequestTotal](imtserverapi_dealerrequesttotal.md "DealerRequestTotal") | Gets the total number of requests in the trade queue available to the specified manager account. |
| [DealerRequestNext](imtserverapi_dealerrequestnext.md "DealerRequestNext") | Gets a trade request with the specified index. |
| [DealerRequestGet](imtserverapi_dealerrequestget.md "DealerRequestGet") | Gets a trade request with the specified identifier. |
| [DealerRequestGetAll](imtserverapi_dealerrequestgetall.md "DealerRequestGetAll") | Gets all trade requests from the trade queue available to the specified manager account. |