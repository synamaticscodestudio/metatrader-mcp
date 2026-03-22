# OnDealerResult (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Dealer Interface ](imtdealersink.md "Dealer Interface")/ OnDealerResult | [](imtdealersink.md "Dealer Interface") [](imtdealersink_ondealeranswer.md "OnDealerAnswer") |
| --- | --- | --- |
| --- | --- |

IMTDealerSink::OnDealerResult
Asynchronous answer to a dealer's trade request in the form of the object of confirmation.
C++
virtual void IMTDealerSink::OnDealerResult( const IMTConfirm* result // Request confirmation result )  
---  
.NET
virtual void CIMTDealerSink.OnDealerResult( CIMTConfirm result // Request confirmation result )  
---  
Parameters
result
[in] The result of [confirmation of the trade request](imtconfirm.md "IMTConfirm").
Note
The method is obsolete, it is recommended to use [IMTDealerSink::OnDealerAnswer](imtdealersink_ondealeranswer.md "OnDealerAnswer") instead.
The method is an asynchronous response of the server to a dealer's trade request performed using the [IMTManagerAPI::DealerSend](imtmanagerapi_dealersend.md "DealerSend") method.
A value corresponding to the [IMTRequest::ID](imtrequest_id.md "ID") (not [IMTRequest::IDClient](imtrequest_idclient.md "IDClient")) value of the initial request is passed to the [IMTConfirm::ID](imtconfirm_id.md "ID") field.