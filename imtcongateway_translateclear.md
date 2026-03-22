# TranslateClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ TranslateClear | [](imtcongateway_translatedelete.md "TranslateDelete") [](imtcongateway_translateshift.md "TranslateShift") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::TranslateClear
Clear the list of price translation settings of a gateway.
C++
MTAPIRES IMTConGateway::TranslateClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.TranslateClear()  
---  
Python (Manager API)
MTConGateway.TranslateClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method clears the entire list of a gateway's price translation settings.