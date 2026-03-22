# OnRequestAdd (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequestSink ](imtrequestsink.md "IMTRequestSink")/ OnRequestAdd | [](imtrequestsink.md "IMTRequestSink") [](imtrequestsink_onrequestupdate.md "OnRequestUpdate") |
| --- | --- | --- |
| --- | --- |

IMTRequestSink::OnRequestAdd
A handler of the event of adding a trade request.
C++
virtual void IMTRequestSink::OnRequestAdd( const IMTRequest* request // A pointer to the request object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTRequestSink.OnRequestAdd( CIMTRequest request // An object of a trade request )  
---  
Parameters
request
[in] A pointer to the object of the added request.
Note
This method is called by the API to notify that a new trade request has been added.