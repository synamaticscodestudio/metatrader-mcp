# OnTradeRequestUpdate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Interface of Trade Events ](imttradesink.md "Interface of Trade Events")/ OnTradeRequestUpdate | [](imttradesink_ontraderequestadd.md "OnTradeRequestAdd") [](imttradesink_ontraderequestdelete.md "OnTradeRequestDelete") |
| --- | --- | --- |
| --- | --- |

IMTTradeSink::OnTradeRequestUpdate
A handler of the event that the state of a [trade request](imtrequest.md "IMTRequest") has changed.
virtual void IMTTradeSink::OnTradeRequestUpdate( const IMTRequest* request // A pointer to the request object )  
---  
Parameters
request
[in] A pointer to the object of a [trade request](imtrequest.md "IMTRequest").
Note
This method notifies that the state of a trade request has changed during its processing.
To analyze the changes, use the [IMTRequest::ResultRetcode](imtrequest_resultretcode.md "ResultRetcode") property of a trade request and other properties of its state (IMTRequest::Result*).
The event is not used for the requests that are automatically confirmed by the server, since there cannot be any intermediate changes. The method is only called when the request is processed by a plugin, dealer or gateway.