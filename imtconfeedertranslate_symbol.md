# Symbol (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeederTranslate ](imtconfeedertranslate.md "IMTConFeederTranslate")/ Symbol | [](imtconfeedertranslate_source.md "Source") [](imtconfeedertranslate_bidmarkup.md "BidMarkup") |
| --- | --- | --- |
| --- | --- |

IMTConFeederTranslate::Symbol
Get the name of a [symbol](config_symbol.md "Symbols") in the trading platform.
C++
LPCWSTR IMTConFeederTranslate::Symbol() const  
---  
.NET (Gateway/Manager API)
string CIMTConFeederTranslate.Symbol()  
---  
Python (Manager API)
MTConFeederTranslate.Symbol  
---  
Return Value
If successful, it returns a pointer to a string with the symbol name if the trading platform. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConFeederTranslate](imtconfeedertranslate.md "IMTConFeederTranslate") object.
To use the string after the object removal (call of the [IMTConFeederTranslate::Release](imtconfeedertranslate_release.md "Release") method of this object), a copy of it should be created.
IMTConFeederTranslate::Symbol
Set the symbol name in the trading platform.
C++
MTAPIRES IMTConFeederTranslate::Symbol( LPCWSTR symbol // The name of a symbol in the trading platform )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeederTranslate.Symbol( srting symbol // The name of a symbol in the trading platform )  
---  
Python (Manager API)
MTConFeederTranslate.Symbol  
---  
Parameters
symbol
[in] The name of a symbol in the trading platform.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.