# OnRequestSync (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequestSink ](imtrequestsink.md "IMTRequestSink")/ OnRequestSync | [](imtrequestsink_onrequestdelete.md "OnRequestDelete") [](imtconfirm.md "IMTConfirm") |
| --- | --- | --- |
| --- | --- |

IMTRequestSink::OnRequestSync
A handler of the event of synchronization of a queue of trade requests.
C++
virtual void IMTRequestSink::OnRequestSync()  
---  
.NET (Gateway/Manager API)
virtual void CIMTRequestSink.OnRequestSync()  
---  
Note
This handler is required to notify dealers of the events in the queue of trade requests.