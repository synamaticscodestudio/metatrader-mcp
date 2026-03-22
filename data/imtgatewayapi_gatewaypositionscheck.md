# GatewayPositionsCheck (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Controlling Positions in External System ](imtgatewayapi_position_control.md "Controlling Positions in External System")/ GatewayPositionsCheck | [](imtgatewayapi_gatewaypositionsanswer.md "GatewayPositionsAnswer") [](imtgatewayapi_order_control.md "Controlling Orders in External System") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::GatewayPositionsCheck
This method is intended for verification of positions with an external trading system. This method is reserved for future use.
C++
MTAPIRES IMTGatewayAPI::GatewayPositionsCheck( const MTAPIRES result, // Result const INT64* positions_time, // Position state fixing time const IMTPositionArray* positions // Positions array )  
---  
.NET
MTRetCode CIMTGatewayAPI.GatewayPositionsCheck( MTRetCode result, // Result long positions_time, // Position state fixing time CIMTPositionArray positions // Positions array )  
---  
Parameters
result
[in] Response code.
positions_time
[in] Positions state fixing time, specified in seconds that have elapsed since 01.01.1970.
positions
[in] [An object of the array of positions](imtpositionarray.md "IMTPositionArray") received from an external system. For a correct operation, the following fields of [IMTPosition](imtposition.md "IMTPosition") objects inside the array must be filled:
  * Symbol
  * Volume
  * ContractSize
  * Action
  * PriceOpen

Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.