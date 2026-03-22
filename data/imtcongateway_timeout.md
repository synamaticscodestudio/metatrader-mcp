# Timeout (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ Timeout | [](imtcongateway_flags.md "Flags") [](imtcongateway_timeoutreconnect.md "TimeoutReconnect") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::Timeout
Get the timeout of a gateway before reconnecting.
C++
UINT IMTConGateway::Timeout() const  
---  
.NET (Gateway/Manager API)
uint CIMTConGateway.Timeout()  
---  
Return Value
The timeout of a gateway before reconnecting.
Note
The method is obsolete and is no longer used.
IMTConGateway::Timeout
Set the timeout of a gateway before reconnecting.
C++
MTAPIRES IMTConGateway::Timeout( const UINT timeout // Timeout )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.Timeout( uint timeout // Timeout )  
---  
Parameters
timeout
[in] Timeout.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method is obsolete and is no longer used.