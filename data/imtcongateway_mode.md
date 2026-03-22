# Mode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ Mode | [](imtcongateway_gatewaypassword.md "GatewayPassword") [](imtcongateway_flags.md "Flags") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::Mode
Get the gateway operation mode.
C++
UINT IMTConGateway::Mode() const  
---  
.NET (Gateway/Manager API)
EnGatewayMode CIMTConGateway.Mode()  
---  
Python (Manager API)
MTConGateway.Mode  
---  
Return Value
One of the values of the [IMTConGateway::EnGatewayMode](imtcongateway_enum.htm#engatewaymode) enumeration.
IMTConGateway::Mode
Set the gateway operation mode.
C++
MTAPIRES IMTConGateway::Mode( const UINT mode // Operation mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.Mode( EnGatewayMode mode // Operation mode )  
---  
Python (Manager API)
MTConGateway.Mode  
---  
Parameters
mode
[in] The [IMTConGateway::EnGatewayMode](imtcongateway_enum.htm#engatewaymode) enumeration is used to pass the operation mode.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.