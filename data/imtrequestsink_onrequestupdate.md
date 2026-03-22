# OnRequestUpdate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequestSink ](imtrequestsink.md "IMTRequestSink")/ OnRequestUpdate | [](imtrequestsink_onrequestadd.md "OnRequestAdd") [](imtrequestsink_onrequestdelete.md "OnRequestDelete") |
| --- | --- | --- |
| --- | --- |

IMTRequestSink::OnRequestUpdate
A handler of the event of trade request change.
C++
virtual void IMTRequestSink::OnRequestUpdate( const IMTRequest* request // A pointer to the request object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTRequestSink.OnRequestUpdate( CIMTRequest request // An object of a trade request )  
---  
Parameters
request
[in] A pointer to the object of the changed request.
Note
This method is called by the API to notify that a trade request has been modified.