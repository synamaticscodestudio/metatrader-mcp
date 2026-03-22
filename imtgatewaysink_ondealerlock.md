# OnDealerLock (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Event Interface ](imtgatewaysink.md "Event Interface")/ OnDealerLock | [](imtgatewaysink_ondealeranswer.md "OnDealerAnswer") [](imtgatewaysink_hookserverconnect.md "HookServerConnect") |
| --- | --- | --- |
| --- | --- |

IMTGatewaySink::OnDealerLock
A handler of the event of capturing (blocking) of a successive trade request from a requests queue.
C++
virtual void IMTGatewaySink::OnDealerLock( const MTAPIRES retcode, // Result const IMTRequest* request, // An object of a trade request const IMTUser* user, // An object of a client record const IMTAccount* account, // An object of a trading account const IMTOrder* order, // An order object const IMTPosition* position // Position object )  
---  
.NET
virtual void CIMTGatewaySink.OnDealerLock( MTRetCoed retcode, // Result CIMTRequest request, // An object of a trade request CIMTUser user, // An object of a client record CIMTAccount account, // An object of a trading account CIMTOrder order, // An order object CIMTPosition position // Position object )  
---  
Parameters
retcode
[in] Trading request capture [result code](reference_retcodes.md "Return Codes"). [MT_RET_OK](retcodes_successful.md "Successful completion") is returned, in case of a successful capture. Code MT_RET_OK_NONE means that the request is no longer available on the trade server. For example, it could have been captured by another dealer or application.
If the return code differs from MT_RET_OK, then only the [IMTRequest::ID](imtrequest_id.md "ID") field is guaranteed to be filled in the 'request' parameter. Other request parameters can be left blank.
request
[in] Captured [trade request object](imtrequest.md "IMTRequest").
user
[in] [Client record object](imtuser.md "IMTUser") who formed a request.
account
[in] [Trading account object](imtaccount.md "IMTAccount") of the client who formed a request.
order
[in] [Object of the order](imtorder.md "IMTOrder") that corresponds to a request.
position
[in] Client [position object](imtposition.md "IMTPosition") by the request instrument before its execution.
Note
The method is used only for gateways.
Filling all the parameters except retcode and request depends on a gateway connection mode determined by the [IMTGatewayAPI:DealerStart](imtgatewayapi_dealerstart.md "DealerStart") method. Filling of some parameters may depend on the request type. For example, for [IMTRequest::TA_SLTP](imtrequest_enum.htm#ta_sltp) the 'order' parameter is not filled even if [IMTGatewayAPI::DEALER_FLAG_ORDER](imtgatewayapi_enum.htm#endealerrequestflags) is enabled, since no order is created in the platform in this case.
In the 'gateway' parameter, the prices are specified with regard to the translation parameters ([IMTConGatewayTranslate](imtcongatewaytranslate.md "IMTConGatewayTranslate")) set for the gateway, whereas in the 'order' and 'position' parameters, actual prices in the platform are specified (without regard to the translation parameters).