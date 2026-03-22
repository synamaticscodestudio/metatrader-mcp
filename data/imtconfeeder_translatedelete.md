# TranslateDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ TranslateDelete | [](imtconfeeder_translateupdate.md "TranslateUpdate") [](imtconfeeder_translateclear.md "TranslateClear") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::TranslateDelete
Remove a setting of conversion of data transmitted by the data feed by the index.
C++
MTAPIRES IMTConFeeder::TranslateDelete( const UINT pos // Setting position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeeder.TranslateDelete( uint pos // Setting position )  
---  
Python (Manager API)
MTConFeeder.TranslateDelete( pos # Setting position )  
---  
Parameters
pos
[in] Setting position, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.