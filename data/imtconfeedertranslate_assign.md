# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeederTranslate ](imtconfeedertranslate.md "IMTConFeederTranslate")/ Assign | [](imtconfeedertranslate_release.md "Release") [](imtconfeedertranslate_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConFeederTranslate::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConFeederTranslate::Assign( const IMTConFeederTranslate* param // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeederTranslate.Assign( CIMTConFeederTranslate param // Source object )  
---  
Parameters
param
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.