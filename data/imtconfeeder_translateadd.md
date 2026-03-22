# TranslateAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ TranslateAdd | [](imtconfeeder_symbolnext.md "SymbolNext") [](imtconfeeder_translateupdate.md "TranslateUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::TranslateAdd
Add a setting of conversion of data transmitted by the data feed.
C++
MTAPIRES IMTConFeeder::TranslateAdd( IMTConFeederTranslate* param // An object of data conversion setting )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeeder.TranslateAdd( CIMTConFeederTranslate param // An object of data conversion setting )  
---  
Python (Manager API)
MTConFeeder.TranslateAdd( param # An object of data conversion setting )  
---  
Parameters
param
[in] An object of data conversion setting.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.