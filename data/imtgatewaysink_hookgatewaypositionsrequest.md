# HookGatewayPositionsRequest (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Event Interface ](imtgatewaysink.md "Event Interface")/ HookGatewayPositionsRequest | [](imtgatewaysink_hookserverconnect.md "HookServerConnect") [](imtgatewaysink_hookgatewaypositionscheck.md "HookGatewayPositionsCheck") |
| --- | --- | --- |
| --- | --- |

IMTGatewaySink:: HookGatewayPositionsRequest
The hook for receiving states of trading accounts used by the gateway to operate in an external system. The hook is called when clicking "Request" on "Positions" tab of the gateway in MetaTrader 5 Administrator.
When calling the hook, the gateway developer should decide whether positions from an external system should be requested. Depending on the decision, one of [response codes](retcodes_successful.md "Successful completion") should be returned from the hook:
  * MT_RET_OK — if this code is returned, the developer is to call [IMTGatewayAPI::GatewayPositionsAnswer](imtgatewayapi_gatewaypositionsanswer.md "GatewayPositionsAnswer") method that will be used to transfer the response code for receiving positions from an external trading system (MT_RET_OK), as well as positions themselves if they are received successfully. After that, the positions will be displayed on "Positions" tab of the gateway in MetaTrader 5 Administrator. Such sequence of actions is used if an external system provides data on positions in real time mode.
  * MT_RET_OK_NONE — if this code is returned, the gateway developer signalizes that positions from an external system have already been transferred to MetaTrader 5 using [IMTGatewayAPI::GatewayPositionsAnswer](imtgatewayapi_gatewaypositionsanswer.md "GatewayPositionsAnswer") method. Such sequence of actions is used if an external system provides data on positions only after the end of a trading session (clearing). When launching a gateway or completing a trading session, the developer should receive data on external trading system positions and submit it to Gateway API using [IMTGatewayAPI::GatewayPositionsAnswer](imtgatewayapi_gatewaypositionsanswer.md "GatewayPositionsAnswer") method. Further on, MT_RET_OK_NONE response code should be returned when calling HookGatewayPositionsRequest hook before the gateway reset or a trade session end.

C++
MTAPIRES IMTGatewaySink::HookGatewayPositionsRequest()  
---  
.NET
MTRetCode CIMTGatewaySink.HookGatewayPositionsRequest()  
---  
Return Value
MT_RET_OK or MT_RET_OK_NONE response code depending on the sequence of actions when working with an external system. In case of an error, the appropriate [error code](reference_retcodes.md "Return Codes") should be returned.