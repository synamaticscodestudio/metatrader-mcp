# OnGatewayAccountAnswer (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Event Interface ](imtgatewaysink.md "Event Interface")/ OnGatewayAccountAnswer | [](imtgatewaysink_ongatewayaccountset.md "OnGatewayAccountSet") [](imtgatewaysink_ondealeranswer.md "OnDealerAnswer") |
| --- | --- | --- |
| --- | --- |

IMTGatewaySink::OnGatewayAccountAnswer
This is a handler for an event of receiving a result of a request for MetaTrader 5 platform user data. This handler receives a user data requested via [IMTGatewayAPI::GatewayAccountRequest](imtgatewayapi_gatewayaccountrequest.md "GatewayAccountRequest") method.
C++
virtual void IMTGatewaySink::OnGatewayAccountAnswer( const MTAPIRES retcode, // Result const INT64 request_id, // Request ID const IMTUser* user // An object of a client record const IMTAccount* account // An object of a trading account const IMTOrderArray* orders // Array of orders const IMTPositionArray* positions // Positions array )  
---  
.NET
virtual void CIMTGatewaySink.OnGatewayAccountAnswer( MTRetCode retcode, // Result long request_id, // Request ID CIMTUser user // An object of a client record CIMTAccount account // An object of a trading account CIMTOrderArray orders // Array of orders CIMTPositionArray  positions // Positions array )  
---  
Parameters
retcode
[in] Code of the data request processing result. MT_RET_OK response code is returned if the data has been successfully received. Otherwise, the appropriate [error code](reference_retcodes.md "Return Codes") is returned.
request_id
[in] Request ID. It is used for binding the requests executed by [IMTGatewayAPI::GatewayAccountRequest](imtgatewayapi_gatewayaccountrequest.md "GatewayAccountRequest") method and the answers received via this handler.
*user
[in] [An object of the client record](imtuser.md "IMTUser"). Only [Login](imtuser_login.md "Login") field and a client account number in an external trading system are passed in IMTUser object [IMTUser::ExternalAccountGet](imtuser_externalaccountget.md "ExternalAccountGet") method should be used to receive a client account number).
*account
[in] [Trading account object](imtaccount.md "IMTAccount"). Only [Balance](imtaccount_balance.md "Balance") field is used in IMTAccount object for passing the actual balance value.
*orders
[in] [An object of the array of](imtorderarray.md "IMTOrderArray") client orders.
*positions
[in] [An object of the array of](imtpositionarray.md "IMTPositionArray") client positions.