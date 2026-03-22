# TranslateClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ TranslateClear | [](imtconfeeder_translatedelete.md "TranslateDelete") [](imtconfeeder_translateshift.md "TranslateShift") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::TranslateClear
Clear the list of data conversion parameters of a data feed.
C++
MTAPIRES IMTConFeeder::TranslateClear() const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeeder.TranslateClear()  
---  
Python (Manager API)
MTConFeeder.TranslateClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method clears the entire list of symbols of a data feed.