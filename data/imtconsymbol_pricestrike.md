# PriceStrike (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ PriceStrike | [](imtconsymbol_optionsmode.md "OptionsMode") [](imtconsymbolsession.md "IMTConSymbolSession") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::PriceStrike
Getting the strike price of an option, i.e. the price at which the option gives the right to buy or sell an asset.
C++
double IMTConSymbol::PriceStrike() const  
---  
.NET (Gateway/Manager API)
double CIMTConSymbol.PriceStrike()  
---  
Python (Manager API)
MTConSymbol.PriceStrike  
---  
Return Value
The strike price of the option.
IMTConSymbol::PriceStrike
Setting the strike price of an option, i.e. the price at which the option gives the right to buy or sell an asset.
C++
MTAPIRES IMTConSymbol::PriceStrike( const double price // The strike price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.PriceStrike( double price // The strike price )  
---  
Python (Manager API)
MTConSymbol.PriceStrike  
---  
Parameters
value
[in] The strike price of the option.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.