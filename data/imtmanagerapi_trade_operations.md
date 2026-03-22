# Trading Functions (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface")/ Trade Activity | [](imtmanagerapi_newssend.md "NewsSend") [](imtmanagerapi_dealing.md "Dealing") |
| --- | --- | --- |
| --- | --- |

Trading Functions
This section contains descriptions of functions, using which you can implement trading activities from an application developed using the MetaTrader 5 Manager API.
Trading functions are divided into the following sections:
  * [Dealing](imtmanagerapi_dealing.md "Dealing") — dealer activity functions.
  * [Trading requests](imtmanagerapi_trading_request.md "Trade Requests") — functions for working with trading requests queue.
  * [Auxiliary Functions](imtmanagerapi_trade_auxiliary.md "Auxiliary Functions") — functions for calculating profit, margin requirements and conversion rates.

Dealer and Supervisor Modes
Depending on the [rights](imtconmanager_enum.htm#enmanagerrights) assigned to an account, a manager can perform the following activities related to trade operations on the server:
Dealing
The Dealing permission ([IMTConManager:RIGHT_TRADES_DEALER](imtconmanager_enum.htm#enmanagerrights)) allows a manager to handle trade requests received in accordance with the [routing rules](config_route.md "Routing"). Also, this right allows the manager the perform trade operations.
The dealing procedure:
  * After connecting to a server using the [IMTManagerAPI::Connect](imtmanagerapi_connect.md "Connect") method with the required [pumping modes](imtmanagerapi_enpumpmodes.md "Pumping Mode") (for orders, positions, accounts, groups and symbols) and starting dealing using the [IMTManagerAPI:DealerStart](imtmanagerapi_dealerstart.md "DealerStart") method, the manager receives the status of the queue of requests forwarded to the manager in accordance with the routing rules. Next, it will receive the changes of the queue (added, edited and deleted requests) using the methods of the [IMTRequestSink](imtrequestsink.md "IMTRequestSink") interface.
  * To capture a request from a queue for processing, methods [IMTManagerAPI:DealerGet](imtmanagerapi_dealerget.md "DealerGet") and [IMTManagerAPI:DealerLock](imtmanagerapi_dealerlock.md "DealerLock") are used. A captured request must necessarily be processed by the dealer using the [IMTManagerAPI::DealerAnswer](imtmanagerapi_dealeranswer.md "DealerAnswer") method. In this method, the object request confirmation [IMTConfirm](imtconfirm.md "IMTConfirm") is passed, where the dealer specifies how the request should be executed.
  * Once confirmed by a dealer, the request appears on the queue to be executed by the server. The result of request execution can be received based on its identifier ([IMTRequest::ID](imtrequest_id.md "ID")) using the [IMTRequest::Result*](imtrequest_resultretcode.md "ResultRetcode") methods.

Supervisor
The Supervisor right ([IMTConManager:RIGHT_TRADES_SUPERVIOSR](imtconmanager_enum.htm#enmanagerrights)) allows a manager to view the entire queue of requests forwarded to him or her from available client groups, and track the process of request processing by other dealers.
Description of the Supervisor mode:
  * After connecting to a server using the [IMTManagerAPI::Connect](imtmanagerapi_connect.md "Connect") method with the required [pumping modes](imtmanagerapi_enpumpmodes.md "Pumping Mode") (for orders, positions, accounts, groups and symbols), the manager receives the status of the queue of requests, which the manager can view in accordance with the client group settings ([IMTConManager::Group*](imtconmanager_groupadd.md "GroupAdd")).
  * Then the manager will receive changes of the queue (added, edited and deleted requests) using the methods of the [IMTRequestSink](imtrequestsink.md "IMTRequestSink") interface. Also, the manager will be able to get the results of request processing by other dealers using the [IMTRequest::Result*](imtrequest_resultretcode.md "ResultRetcode") methods.
  * When switching to the dealing mode using the [IMTManagerAPI:DealerStart](imtmanagerapi_dealerstart.md "DealerStart") method, the manager no longer sees the entire queue of requests from client groups available to him or her. Since then, the manager receives only the requests that are forwarded to him or her for processing in accordance with [routing rules](config_route.md "Routing"). Thus, the manager simply switches to the dealing mode described above.
