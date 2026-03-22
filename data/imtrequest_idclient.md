# IDClient (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ IDClient | [](imtrequest_resultcomment.md "ResultComment") [](imtrequest_ip.md "IP") |
| --- | --- | --- |
| --- | --- |

IMTRequest::IDClient
Get the request ID on the side of the client who has sent the request.
C++
UINT IMTRequest::IDClient() const  
---  
.NET (Gateway/Manager API)
uint CIMTRequest.IDClient()  
---  
Return Value
The request ID on the side of the client who has sent the request.
Note
This method is used for identifying own requests of an API application. When calling [IMTManagerAPI::DealerSend](imtmanagerapi_dealersend.md "DealerSend"), the identifier assigned to a request is passed to the ID parameter. This identifier is assigned to the IMTRequest::IDClient field.
When receiving a request processing result via the [IMTDealerSink](imtdealersink.md "Dealer Interface") interface, it is possible to analyze this field while identifying own requests on the whole stream.
IDClient is only unique within the current connection of the application. Requests from several clients/API can have the same IDClient. Therefore, it makes sense to analyze the identifier only from the application which fills it.