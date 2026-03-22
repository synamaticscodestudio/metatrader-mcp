# OnDealSync (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDealSink ](imtdealsink.md "IMTDealSink")/ OnDealSync | [](imtdealsink_ondealclean.md "OnDealClean") [](imtdealsink_ondealperform.md "OnDealPerform") |
| --- | --- | --- |
| --- | --- |

IMTDealSink::OnDealSync
A handler of the event of a deal database synchronization.
C++
virtual void IMTDealSink::OnDealSync()  
---  
.NET (Gateway/Manager API)
virtual void CIMTDealSink.OnDealSync()  
---  
Note
This method is called only on the trade server in the Server API. It notifies of the completion of deal database synchronization between the trade server and its backup server.
The method is obsolete and is no longer used.