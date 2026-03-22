# IMTDealSink (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals")/ IMTDealSink | [](imtdealarray_searchright.md "SearchRight") [](imtdealsink_ondealadd.md "OnDealAdd") |
| --- | --- | --- |
| --- | --- |

IMTDealSink
The IMTDealSink class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [OnDealAdd](imtdealsink_ondealadd.md "OnDealAdd") | A handler of the event of adding a deal. |
| [OnDealUpdate](imtdealsink_ondealupdate.md "OnDealUpdate") | A handler of the event of updating a deal. |
| [OnDealDelete](imtdealsink_ondealdelete.md "OnDealDelete") | A handler of the event of deal removal. |
| [OnDealClean](imtdealsink_ondealclean.md "OnDealClean") | A handler of the event of clearing of a client's deals. |
| [OnDealSync](imtdealsink_ondealsync.md "OnDealSync") | A handler of the event of a deal database synchronization (only in MetaTrader 5 Server API). The method is obsolete and is no longer used. |
| [OnDealPerform](imtdealsink_ondealperform.md "OnDealPerform") | A handler of the event of deal execution (only in MetaTrader 5 Server API). |
| [OnDealPerformCloseBy](imtdealsink_ondealperformcloseby.md "OnDealPerformCloseBy") | A handler of the event related to the execution of a Close By deal (only in MetaTrader 5 Server API). |

In events, it is only allowed to use synchronous calls of methods changing, creating and deleting only those deals which are in the same groups as the deal for which the event was received. In all other cases, you should use asynchronous calls — API methods should be called in a separate thread, and not in the thread that triggers the events of the deal database. Failure to comply with this rule can cause server deadlocks.  
---