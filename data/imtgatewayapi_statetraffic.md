# StateTraffic (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ External Connection State ](imtgatewayapi_state.md "External Connection Status")/ StateTraffic | [](imtgatewayapi_stateconnect.md "StateConnect") [](imtgatewayapi_client.md "Client Connection") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::StateTraffic
Add the value to the external connection traffic counter.
C++
MTAPIRES IMTGatewayAPI::StateTraffic( const UINT received_bytes, // Incoming traffic const UINT sent_bytes // Outgoing traffic )  
---  
.NET
MTRetCode CIMTGatewayAPI.StateTraffic( uint received, // Incoming traffic uint sent // Outgoing traffic )  
---  
Parameters
received_bytes
[in] Incoming traffic in bytes.
sent_bytes
[in] Outgoing traffic in bytes.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Incoming and outgoing traffic values passed using this method are added to the current values.
Traffic counters are reset when a gateway/data feed is restarted.