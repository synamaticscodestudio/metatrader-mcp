# DealerSend (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Activity ](imtmanagerapi_trade_operations.md "Trading Functions") / [ Dealing ](imtmanagerapi_dealing.md "Dealing")/ DealerSend | [](imtmanagerapi_dealeranswer.md "DealerAnswer") [](imtmanagerapi_dealerbalance.md "DealerBalance") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::DealerSend
Send a trade request to the server.
C++
MTAPIRES IMTManagerAPI::DealerSend( IMTRequest* request, // An object of a trade request IMTDealerSink* sink, // A pointer to the IMTDealerSink object UINT& id // Request ID )  
---  
.NET
MTRetCode CIMTManagerAPI.DealerSend( CIMTRequest request, // An object of a trade request CIMTDealerSink sink, // CIMTDealerSink object out uint id // Request ID )  
---  
Python
ManagerAPI.DealerSend( request, # объект торгового запроса sink # MTDealerSink object )  
---  
Parameters
request
[in] [An object of a trade request](imtrequest.md "IMTRequest"). Only [dealer actions](imtrequest_enum.htm#entradeactions) (200-255) can be set as a request type in [IMTRequest::Action](imtrequest_action.md "Action").
sink
[in] A pointer to the object that implements the [IMTDealerSink](imtdealersink.md "Dealer Interface") interface, to which the result of trade request execution is passed asynchronously. To unsubscribe from receipt of the result, the [IMTManagerAPI::DealerUnsubscribe](imtmanagerapi_dealerunsubscribe.md "DealerUnsubscribe") method is used. If you don't need any notification, pass nullptr as a value.
id
[out] The ID assigned to the sent request ([IMTRequest::IDClient](imtrequest_idclient.md "IDClient")). This ID allows the application to identify its own requests in the stream when receiving the answers from the trade server in the [IMTDealerSink](imtdealersink.md "Dealer Interface") interface. The ID is only unique within the current connection of the application. Requests from several clients/API can have the same IDs. Therefore, it makes sense to analyze the identifier only from the application which fills it.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred which corresponds to the response code. The MT_RET_OK response code only means that the request has successfully been sent to the trade server. The execution result should be tracked in the [IMTDealerSink::OnDealerResult](imtdealersink_ondealerresult.md "OnDealerResult") or [IMTDealerSink::OnDealerAnswer](imtdealersink_ondealeranswer.md "OnDealerAnswer") handlers.
Note
An answer to a trade request is formed in two forms - [IMTDealerSink::OnDealerResult](imtdealersink_ondealerresult.md "OnDealerResult") and [IMTDealerSink::OnDealerAnswer](imtdealersink_ondealeranswer.md "OnDealerAnswer").
Up to 128 requests can be sent to the trade processing queue at a time. If this limit is exceeded, the server will return [MT_RET_REQUEST_TOO_MANY](retcodes_trade_request.md "Trade Requests") error.