# RequestNext (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Trade Requests ](imtgatewayapi_trading_request.md "Trade Requests")/ RequestNext | [](imtgatewayapi_requesttotal.md "RequestTotal") [](imtgatewayapi_requestget.md "RequestGet") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::RequestNext
Get a trade request by a queue position.
C++
MTAPIRES IMTGatewayAPI::RequestNext( const UINT pos, // Trade request position IMTRequest* request // An object of a trade request IMTUser* user // An object of the client record IMTAccount* account // An object of a trading account IMTOrder* order // An order object IMTPosition* position // Position object )  
---  
.NET
MTRetCode CIMTGatewayAPI.RequestNext( uint pos, // Trade request position CIMTRequest request // An object of a trade request CIMTUser user // An object of the client record CIMTAccount account // An object of a trading account CIMTOrder order // An order object CIMTPosition position // Position object )  
---  
Parameters
pos
[in] Position of a trade request in a queue, starting with 0.
request
[out] An object of a trade request. The request object must first be created using the [IMTGatewayAPI::RequestCreate](imtgatewayapi_requestcreate.md "RequestCreate") method.
user
[out] An object of the client login. The user object must first be created using the [IMTGatewayAPI::UserCreate](imtgatewayapi_usercreate.md "UserCreate") method.
account
[out] An object of a client trading account. The account object must first be created using the [IMTGatewayAPI::UserCreateAccount](imtgatewayapi_usercreateaccount.md "UserCreateAccount") method.
order
[out] An object of a trade order. The order object must first be created using the [IMTGatewayAPI::OrderCreate](imtgatewayapi_ordercreate.md "OrderCreate") method.
position
[out] A trade position object of a trade request. The position object must first be created using the [IMTGatewayAPI::PositionCreate](imtgatewayapi_positioncreate.md "PositionCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
This method copies trade request data at the specified queue position to the request object. [IMTGatewayAPI::DealerStart](imtgatewayapi_dealerstart.md "DealerStart") must be preliminarily called for making the method work.
Filling all the parameters except retcode and request depends on a gateway connection mode determined by the [IMTGatewayAPI:DealerStart](imtgatewayapi_dealerstart.md "DealerStart") method. Filling of some parameters may depend on the request type. For example, for [IMTRequest::TA_SLTP](imtrequest_enum.htm#ta_sltp) the 'order' parameter is not filled even if [IMTGatewayAPI::DEALER_FLAG_ORDER](imtgatewayapi_enum.htm#endealerrequestflags) is enabled, since no order is created in the platform in this case.
In the 'gateway' parameter, the prices are specified with regard to the translation parameters ([IMTConGatewayTranslate](imtcongatewaytranslate.md "IMTConGatewayTranslate")) set for the gateway, whereas in the 'order' and 'position' parameters, actual prices in the platform are specified (without regard to the translation parameters).