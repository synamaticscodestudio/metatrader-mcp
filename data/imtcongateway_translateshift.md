# TranslateShift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ TranslateShift | [](imtcongateway_translateclear.md "TranslateClear") [](imtcongateway_translatetotal.md "TranslateTotal") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::TranslateShift
Shift the position of a gateway's price translation setting in the list.
C++
MTAPIRES IMTConGateway::TranslateShift( const UINT pos, // Setting position const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.TranslateShift( uint pos, // Setting position int shift // Shift )  
---  
Python (Manager API)
MTConGateway.TranslateShift( pos, # Setting position shift # Shift )  
---  
Parameters
pos
[in] Setting position, starting with 0.
shift
[in] Shift from its current position. A negative value means the shift to the top of the list, a positive value - to its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.