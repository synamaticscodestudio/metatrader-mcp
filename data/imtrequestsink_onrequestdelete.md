# OnRequestDelete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequestSink ](imtrequestsink.md "IMTRequestSink")/ OnRequestDelete | [](imtrequestsink_onrequestupdate.md "OnRequestUpdate") [](imtrequestsink_onrequestsync.md "OnRequestSync") |
| --- | --- | --- |
| --- | --- |

IMTRequestSink::OnRequestDelete
A handler of the event of a trade request deletion.
C++
virtual void IMTRequestSink::OnRequestDelete( const IMTRequest* request // A pointer to the request object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTRequestSink.OnRequestDelete( CIMTRequest  request // A pointer to the request object )  
---  
Parameters
request
[in] A pointer to the object of the deleted request.
Note
This method is called by the API to notify that a trade request has been deleted.
This method is called by the API to notify that a trade request has been deleted. The handler is called for all requests. It can be called at any stage of request lifetime, starting with the moment when the request is added to the server queue ([IMTRequestSink::OnRequestAdd](imtrequestsink_onrequestadd.md "OnRequestAdd")). The request deletion moment depends on how it has been handled: whether it has been executed, rejected, canceled by timeout, etc.