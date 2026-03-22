# Dealing (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Activity ](imtmanagerapi_trade_operations.md "Trading Functions")/ Dealing | [](imtmanagerapi_trade_operations.md "Trading Functions") [](imtmanagerapi_dealerconfirmcreate.md "DealerConfirmCreate") |
| --- | --- | --- |
| --- | --- |

Dealing
The MetaTrader 5 Manager API allows performing dealing using a special set of functions. Functions described in this section allow to connect to a queue of requests of a trade server, select requests from it and process them in accordance with the encoded algorithms.
| Functions | Purpose |
| --- | --- |
| --- | --- |
| [DealerConfirmCreate](imtmanagerapi_dealerconfirmcreate.md "DealerConfirmCreate") | Create request confirmation interface object. |
| [DealerUnsubscribe](imtmanagerapi_dealerunsubscribe.md "DealerUnsubscribe") | Unsubscribe from waiting for results of trading operations executed by DealerSend commands. |
| [DealerStart](imtmanagerapi_dealerstart.md "DealerStart") | Start dealing. |
| [DealerStop](imtmanagerapi_dealerstop.md "DealerStop") | Stop dealing. |
| [DealerGet](imtmanagerapi_dealerget.md "DealerGet") | Get the first request in the queue of requests for processing. |
| [DealerLock](imtmanagerapi_dealerlock.md "DealerLock") | Get a request with a specified ID for processing. |
| [DealerAnswer](imtmanagerapi_dealeranswer.md "DealerAnswer") | Respond to a trade request received for processing using the DealerGet or DealerLock method. |
| [DealerSend](imtmanagerapi_dealersend.md "DealerSend") | Send a trade request to the server. |
| [DealerBalance](imtmanagerapi_dealerbalance.md "DealerBalance") | Conduct balance operations on an account. |
| [DealerBalanceRaw](imtmanagerapi_dealerbalanceraw.md "DealerBalanceRaw") | Conduct balance operation on a user account without checking the free margin and the current balance on the account. |