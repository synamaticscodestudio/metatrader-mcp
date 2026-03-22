# StateConnect (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ External Connection State ](imtgatewayapi_state.md "External Connection Status")/ StateConnect | [](imtgatewayapi_state.md "External Connection Status") [](imtgatewayapi_statetraffic.md "StateTraffic") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::StateConnect
Set the state of the gateway/data feed external connection.
C++
MTAPIRES IMTGatewayAPI::StateConnect( const UINT state // Connection state )  
---  
.NET
MTRetCode CIMTGatewayAPI.StateConnect( bool  state // Connection state )  
---  
Parameters
state
[in] Any value other than 0 means that external connection was established successfully. The 0 value means that connection is absent.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.