# Controlling Positions in External System (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface")/ Controlling Positions in External System | [](imtgatewayapi_dealerexecuteasync.md "DealerExecuteAsync") [](imtgatewayapi_gatewayparamarraycreate.md "GatewayParamArrayCreate") |
| --- | --- | --- |
| --- | --- |

Controlling Positions in External System
MetaTrader 5 Gateway API provides possibility to control position states of the trading accounts, at which the gateway operates in an external system.
If the gateway has such a functionality, the platform administrator can request the state of positions on the trading accounts in an external system via MetaTrader 5 Administrator. The special tab is provided for that:
When clicking "Request", [IMTGatewaySink::HookGatewayPositionsRequest](imtgatewaysink_hookgatewaypositionsrequest.md "HookGatewayPositionsRequest") hook is called in Gateway API. Positions are received and displayed using the hook and the functions described in this section.
| Functions | Purpose |
| --- | --- |
| --- | --- |
| [GatewayParamArrayCreate](imtgatewayapi_gatewayparamarraycreate.md "GatewayParamArrayCreate") | Create an object of the array of parameters. |
| [GatewayPositionArrayCreate](imtgatewayapi_gatewaypositionarraycreate.md "GatewayPositionArrayCreate") | Create an object of the array of positions. |
| [GatewayPositionsAnswer](imtgatewayapi_gatewaypositionsanswer.md "GatewayPositionsAnswer") | Display positions on external trading system accounts in MetaTrader 5 Administrator. |
| [GatewayPositionsCheck](imtgatewayapi_gatewaypositionscheck.md "GatewayPositionsCheck") | Verify positions. This method is reserved for future use. |