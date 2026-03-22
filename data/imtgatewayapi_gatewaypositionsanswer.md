# GatewayPositionsAnswer (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Controlling Positions in External System ](imtgatewayapi_position_control.md "Controlling Positions in External System")/ GatewayPositionsAnswer | [](imtgatewayapi_gatewaypositionarraycreate.md "GatewayPositionArrayCreate") [](imtgatewayapi_gatewaypositionscheck.md "GatewayPositionsCheck") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::GatewayPositionsAnswer
The method is used to display positions on the accounts in MetaTrader 5 Administrator, which are used by the gateway in an external trading system. After calling [IMTGatewaySink:HookGatewayPositionsRequest](imtgatewaysink_hookgatewaypositionsrequest.md "HookGatewayPositionsRequest") hook, a developer can transfer positions state to MetaTrader 5 platform using this method. Transferred positions are displayed in "Positions" tab of MetaTrader 5 Administrator.
More data on using this method can be found in [IMTGatewaySink:HookGatewayPositionsRequest](imtgatewaysink_hookgatewaypositionsrequest.md "HookGatewayPositionsRequest") hook description.
C++
MTAPIRES IMTGatewayAPI::GatewayPositionsAnswer( const MTAPIRES result, // Result const INT64* positions_time, // Position state fixing time const IMTPositionArray* positions // Positions array )  
---  
.NET
MTRetCode CIMTGatewayAPI.GatewayPositionsAnswer( MTRetCode result, // Result long positions_time, // Position state fixing time CIMTPositionArray positions // Positions array )  
---  
Parameters
result
[in] MT_RET_OK response code is used if data on positions has been successfully received from an external system. Otherwise, the appropriate [error code](reference_retcodes.md "Return Codes") is to be returned. 
positions_time
[in] Positions state fixing time, specified in seconds that have elapsed since 01.01.1970. The time is displayed on "Positions" tab of the gateway of the administrator terminal.
positions
[in] [An object of the array of positions](imtpositionarray.md "IMTPositionArray") received from an external system. These positions will be displayed on "Positions" tab of the gateway of the administrator terminal.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
To pass information about external positions the following field of an [IMTPosition](imtposition.md "IMTPosition") object can be used:
  * [Symbol](imtposition_symbol.md "Symbol")
  * [Action](imtposition_action.md "Action")
  * [Digits](imtposition_digits.md "Digits")
  * [PriceOpen](imtposition_priceopen.md "PriceOpen")
  * [Volume](imtposition_volume.md "Volume")
  * [Comment](imtposition_comment.md "Comment")
