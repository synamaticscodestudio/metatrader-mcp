# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeederTranslate ](imtconfeedertranslate.md "IMTConFeederTranslate")/ Clear | [](imtconfeedertranslate_assign.md "Assign") [](imtconfeedertranslate_source.md "Source") |
| --- | --- | --- |
| --- | --- |

IMTConFeederTranslate::Clear
Clear an object.
C++
MTAPIRES IMTConFeederTranslate::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeederTranslate.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.