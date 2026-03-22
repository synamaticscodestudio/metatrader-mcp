# Symbol (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGatewayTranslate ](imtcongatewaytranslate.md "IMTConGatewayTranslate")/ Symbol | [](imtcongatewaytranslate_source.md "Source") [](imtcongatewaytranslate_bidmarkup.md "BidMarkup") |
| --- | --- | --- |
| --- | --- |

IMTConGatewayTranslate::Symbol
Get the target symbol name in the trading platform.
C++
LPCWSTR IMTConGatewayTranslate::Symbol() const  
---  
.NET (Gateway/Manager API)
string CIMTConGatewayTranslate.Symbol()  
---  
Python (Manager API)
MTConGatewayTranslate.Symbol  
---  
Return Value
If successful, it returns a pointer to a string with the symbol name if the trading platform. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConGatewayTranslate](imtcongatewaytranslate.md "IMTConGatewayTranslate") object.
To use the string after the object removal (call of the [IMTConGatewayTranslate::Release](imtcongatewaytranslate_release.md "Release") method of this object), a copy of it should be created.
IMTConGatewayTranslate::Symbol
Set the target symbol name in the trading platform.
C++
MTAPIRES IMTConGatewayTranslate::Symbol( LPCWSTR symbol // The name of a symbol in the trading platform )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGatewayTranslate.Symbol( string symbol // The name of a symbol in the trading platform )  
---  
Python (Manager API)
MTConGatewayTranslate.Symbol  
---  
Parameters
symbol
[in] The name of a symbol in the trading platform.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
[IMTConSymbol::Symbol](imtconsymbol_symbol.md "Symbol") value is used as the symbol name.
If another source of quotes is already specified in symbol settings ([IMTConSymbol::Source](imtconsymbol_source.md "Source")), this symbol cannot be specified as the receiver symbol. Also symbols with the disabled delivery of real-time quotes from data feeds ([IMTConSymbol::TICK_REALTIME](imtconsymbol_enum.htm#entickflags)) cannot be specified as receivers. Conversion settings containing such symbols will be ignored by the platform.