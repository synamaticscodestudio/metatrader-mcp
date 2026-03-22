# Flags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ Flags | [](imtcongateway_mode.md "Mode") [](imtcongateway_timeout.md "Timeout") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::Flags
Get the options of the gateway operation.
C++
UINT IMTConGateway::Flags() const  
---  
.NET (Gateway/Manager API)
EnGatewayFlags CIMTConGateway.Flags()  
---  
Python (Manager API)
MTConGateway.Flags  
---  
Return Value
A value of the [IMTConGateway::EnGatewayFlags](imtcongateway_enum.htm#engatewayflags) enumeration.
IMTConGateway::Flags
Set the options of the gateway operation.
C++
MTAPIRES IMTConGateway::Flags( const UINT flags // Options of gateway operation ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.Flags( EnGatewayFlags flags // Options of gateway operation )  
---  
Python (Manager API)
MTConGateway.Flags  
---  
Parameters
flags
[in] To pass the gateway operation options, the [IMTConGateway::EnGatewayFlags](imtcongateway_enum.htm#engatewayflags) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.