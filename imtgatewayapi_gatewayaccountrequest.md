# GatewayAccountRequest (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Synchronizing Trading Data ](imtgatewayapi_user_control.md "Synchronizing Trading Data")/ GatewayAccountRequest | [](imtgatewayapi_gatewayaccountanswer.md "GatewayAccountAnswer") [](imtgatewayapi_gatewayaccountset.md "GatewayAccountSet") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::GatewayAccountRequest
This method allows Gateway API to request information about a user state in MetaTrader 5 platform. Request result and the requested information are passed to [IMTGatewayAPI::OnGatewayAccountAnswer](imtgatewaysink_ongatewayaccountanswer.md "OnGatewayAccountAnswer") handler.
C++
MTAPIRES IMTGatewaySink::GatewayAccountRequest( const INT64 request_id, // Request ID const IMTUser* user // Login )  
---  
.NET
MTRetCode CIMTGatewaySink.GatewayAccountRequest( long request_id, // Request ID CIMTUser user // Login )  
---  
Parameters
request_id
[in] Arbitrary request ID. It is used for binding the requests executed by this method and the answers received via [IMTGatewayAPI::OnGatewayAccountAnswer](imtgatewaysink_ongatewayaccountanswer.md "OnGatewayAccountAnswer").
user
[in] [An object of the client record](imtuser.md "IMTUser"). [Login](imtuser_login.md "Login") field is used in IMTUser object for identifying a user, for whom data request is performed. The client external system's account number corresponding to the gateway can also be used for identification. Account in an external system can be defined using [IMTUser::ExternalAccountAdd](imtuser_externalaccountadd.md "ExternalAccountAdd") method.
Return Value
An indication of a successful placing of a request to the processing queue is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.