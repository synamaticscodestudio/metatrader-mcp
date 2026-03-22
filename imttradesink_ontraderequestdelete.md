# OnTradeRequestDelete (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Interface of Trade Events ](imttradesink.md "Interface of Trade Events")/ OnTradeRequestDelete | [](imttradesink_ontraderequestupdate.md "OnTradeRequestUpdate") [](imttradesink_ontraderequestprocess.md "OnTradeRequestProcess") |
| --- | --- | --- |
| --- | --- |

IMTTradeSink::OnTradeRequestDelete
A handler of the event of a [trade request](imtrequest.md "IMTRequest") deletion.
virtual void IMTTradeSink::OnTradeRequestDelete( const IMTRequest* request // A pointer to the request object )  
---  
Parameters
request
[in] A pointer to the object of a trade request.
Note
This method notifies of the removal of a trade request. To get the reason for the removal, the [IMTRequest::ResultRetcode](imtrequest_resultretcode.md "ResultRetcode") property of a trade request should be analyzed.