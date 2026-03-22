# Source (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeederTranslate ](imtconfeedertranslate.md "IMTConFeederTranslate")/ Source | [](imtconfeedertranslate_clear.md "Clear") [](imtconfeedertranslate_symbol.md "Symbol") |
| --- | --- | --- |
| --- | --- |

IMTConFeederTranslate::Source
Get the symbol name in the data feed.
C++
LPCWSTR IMTConFeederTranslate::Source() const  
---  
.NET (Gateway/Manager API)
string CIMTConFeederTranslate.Source()  
---  
Python (Manager API)
MTConFeederTranslate.Source  
---  
Return Value
If successful, it returns a pointer to a string with the symbol name if the data feed. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConFeederTranslate](imtconfeedertranslate.md "IMTConFeederTranslate") object.
To use the string after the object removal (call of the [IMTConFeederTranslate::Release](imtconfeedertranslate_release.md "Release") method of this object), a copy of it should be created.
IMTConFeederTranslate::Source
Set the symbol name in the data feed.
C++
MTAPIRES IMTConFeederTranslate::Source( LPCWSTR source // The name of a symbol in a data feed )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeederTranslate.Source( string source // The name of a symbol in a data feed )  
---  
Python (Manager API)
MTConFeederTranslate.Source  
---  
Parameters
source
[in] The name of a symbol in a data feed.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The length of the name is limited to 128 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.