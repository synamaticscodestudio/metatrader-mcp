# TranslateUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ TranslateUpdate | [](imtcongateway_translateadd.md "TranslateAdd") [](imtcongateway_translatedelete.md "TranslateDelete") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::TranslateUpdate
Update price translation settings of a gateway.
C++
MTAPIRES IMTConGateway::TranslateUpdate( const UINT pos, // Setting position const IMTConGatewayTranslate* param // An object of price translation configuration )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.TranslateUpdate( uint pos, // Setting position CIMTConGatewayTranslate param // An object of price translation configuration )  
---  
Python (Manager API)
MTConGateway.TranslateUpdate( pos, # Setting position param # An object of price translation configuration )  
---  
MTConGateway.TranslateSet( param_list # A list of price translation settings )  
---  
Parameters
pos
[in] Setting the position, starting with 0.
param
[in] An object of price translation configuration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.