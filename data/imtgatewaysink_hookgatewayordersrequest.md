# HookGatewayOrdersRequest (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Event Interface ](imtgatewaysink.md "Event Interface")/ HookGatewayOrdersRequest | [](imtgatewaysink_hookgatewaypositionscheck.md "HookGatewayPositionsCheck") [](imtgatewaysink_hookgatewayaccountrequest.md "HookGatewayAccountRequest") |
| --- | --- | --- |
| --- | --- |

IMTGatewaySink::HookGatewayOrdersRequest
The hook for receiving the state of the client's current pending orders in an external trading system.
The functionality is currently under development.  
---  
When calling the hook, the gateway developer should decide whether orders from an external system should be requested. Depending on the decision, one of [response codes](retcodes_successful.md "Successful completion") should be returned from the hook:
  * MT_RET_OK — if this code is returned, the developer is to call [IMTGatewayAPI::GatewayOrdersAnswer](imtgatewayapi_gatewayordersanswer.md "GatewayOrdersAnswer") method that will be used to pass the response code for receiving orders from an external system (MT_RET_OK) and the orders themselves, if it is received successfully.
  * MT_RET_OK_NONE — if this code is returned, the gateway developer signalizes that the current orders have already been passed to MetaTrader 5 using [IMTGatewayAPI::GatewayOrdersAnswer](imtgatewayapi_gatewayordersanswer.md "GatewayOrdersAnswer") method.

C++
MTAPIRES IMTGatewaySink::HookGatewayOrdersRequest()  
---  
.NET
MTRetCode CIMTGatewaySink.HookGatewayOrdersRequest()  
---  
Return Value
MT_RET_OK or MT_RET_OK_NONE response code depending on the sequence of actions when working with an external system. In case of an error, the appropriate [error code](reference_retcodes.md "Return Codes") should be returned.