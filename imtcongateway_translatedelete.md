# TranslateDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ TranslateDelete | [](imtcongateway_translateupdate.md "TranslateUpdate") [](imtcongateway_translateclear.md "TranslateClear") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::TranslateDelete
Remove a translation setting for prices transmitted by the gateway by the index.
C++
MTAPIRES IMTConGateway::TranslateDelete( const UINT pos // Setting position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.TranslateDelete( uint pos // Setting position )  
---  
Python (Manager API)
MTConGateway.TranslateDelete( pos # Setting position )  
---  
Parameters
pos
[in] Setting position, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.