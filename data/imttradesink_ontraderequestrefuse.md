# OnTradeRequestRefuse (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Interface of Trade Events ](imttradesink.md "Interface of Trade Events")/ OnTradeRequestRefuse | [](imttradesink_ontraderequestprocesscloseby.md "OnTradeRequestProcessCloseBy") [](imttradesink_ontradeexecution.md "OnTradeExecution") |
| --- | --- | --- |
| --- | --- |

IMTTradeSink::OnTradeRequestRefuse
A handler of the event of refusal to execute a [trade request](imtrequest.md "IMTRequest") before it is added to the queue. 
virtual void IMTTradeSink::OnTradeRequestRefuse( const IMTRequest* request // A pointer to the request object )  
---  
Parameters
request
[in] A pointer to the object of the rejected [trade request](imtrequest.md "IMTRequest").
Note
Execution can be refused for some reasons, for example due to incorrect parameters or insufficient funds. The exact reason is added to the trade request field [IMTRequest::ResultRetcode](imtrequest_resultretcode.md "ResultRetcode").