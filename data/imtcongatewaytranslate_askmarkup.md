# AskMarkup (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGatewayTranslate ](imtcongatewaytranslate.md "IMTConGatewayTranslate")/ AskMarkup | [](imtcongatewaytranslate_bidmarkup.md "BidMarkup") [](imtcongatewaytranslate_digits.md "Digits") |
| --- | --- | --- |
| --- | --- |

IMTConGatewayTranslate::AskMarkup
Gets a markup value for the Ask price received for a symbol from the data source to which the gateway connects.
C++
INT IMTConGatewayTranslate::AskMarkup() const  
---  
.NET (Gateway/Manager API)
int CIMTConGatewayTranslate.AskMarkup()  
---  
Python (Manager API)
MTConGatewayTranslate.AskMarkup  
---  
Return Value
A markup value for the Ask price received for a symbol from the data source to which the gateway connects.
IMTConGatewayTranslate::AskMarkup
Gets a markup value for the Ask price received for a symbol from the data source to which the gateway connects.
C++
MTAPIRES IMTConGatewayTranslate::AskMarkup( const INT markup // Ask price conversion value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGatewayTranslate.AskMarkup( int markup // Ask price conversion value )  
---  
Python (Manager API)
MTConGatewayTranslate.AskMarkup  
---  
Parameters
markup
[in] Ask price conversion value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The markup function allows to split prices. A negative (or zero) value should be specified for the [Bid](imtcongatewaytranslate_bidmarkup.md "BidMarkup") price, ans a positive (or zero) value should be specified for Ask. In other cases transmitted prices may be incorrect (negative spread).
Transformation can also be applied to the [Depth of Market](reference_dom.md "Depth of Market"). Consider an example where Bid = -10, and Ask = 10. The Market Depth features sell orders at 120 and 110, as well as buy orders at the prices of 90 and 80. After the markup, the prices of sell orders will be changed to 130 and 120, and the price of buy orders will be 80 and 70.