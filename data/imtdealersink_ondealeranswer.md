# OnDealerAnswer (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Dealer Interface ](imtdealersink.md "Dealer Interface")/ OnDealerAnswer | [](imtdealersink_ondealerresult.md "OnDealerResult") [](imtmanagersink.md "Manager API Events Interface") |
| --- | --- | --- |
| --- | --- |

IMTDealerSink::OnDealerAnswer
Asynchronous answer to a dealer's trade request in the form of the object of request.
C++
virtual void IMTDealerSink::OnDealerAnswer( const IMTRequest* request // An object of a trade request )  
---  
.NET
virtual void CIMTDealerSink.OnDealerAnswer( CIMTRequest request // An object of a trade request )  
---  
Parameters
request
[in] [An object of the trade request](imtrequest.md "IMTRequest").
Note
This method is an asynchronous response of the server to a dealer's trade request performed using the [IMTManagerAPI::DealerSend](imtmanagerapi_dealersend.md "DealerSend") method.
To get the identifier of the order and deal created as a result of execution of the request, use the [IMTRequest::ResultOrder](imtrequest_resultorder.md "ResultOrder") and [IMTRequest::ResultDeal](imtrequest_resultdeal.md "ResultDeal") methods.