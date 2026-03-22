# ParameterDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ ParameterDelete | [](imtcongateway_parameterupdate.md "ParameterUpdate") [](imtcongateway_parameterclear.md "ParameterClear") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::ParameterDelete
Delete a gateway parameter by the index.
C++
MTAPIRES IMTConGateway::ParameterDelete( const UINT pos // Position of the parameter )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.ParameterDelete( uint pos // Position of the parameter )  
---  
Python (Manager API)
MTConGateway.ParameterDelete( pos # Position of the parameter )  
---  
Parameters
pos
[in] Position of the parameter, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.