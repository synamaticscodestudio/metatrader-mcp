# TranslateGet (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ TranslateGet | [](imtconfeeder_translatenext.md "TranslateNext") [](imtconfeeder_stateconnected.md "StateConnected") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::TranslateGet
Get a setting of conversion of data transmitted by the data feed by the symbol.
C++
MTAPIRES IMTConFeeder::TranslateGet( LPCWSTR symbol, // Symbol name IMTConFeederTranslate* param // An object of data conversion setting ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeeder.TranslateGet( string symbol, // Symbol name CIMTConFeederTranslate param // An object of data conversion setting )  
---  
Python (Manager API)
MTConFeeder.TranslateGet( symbol # Symbol name )  
---  
Parameters
symbol
[in] Symbol name.
param
[out] An object of data conversion setting. The 'param' object must first be created using the [IMTAdminAPI::FeederTranslateCreate](imtadminapi_feedertranslatecreate.md "FeederTranslateCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConFeederTranslate::Symbol()](imtconfeedertranslate_symbol.md "Symbol") value is used as the symbol.