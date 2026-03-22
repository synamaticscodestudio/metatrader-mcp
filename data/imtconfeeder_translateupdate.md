# TranslateUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ TranslateUpdate | [](imtconfeeder_translateadd.md "TranslateAdd") [](imtconfeeder_translatedelete.md "TranslateDelete") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::TranslateUpdate
Update the data conversion settings of the data feed.
C++
MTAPIRES IMTConFeeder::TranslateUpdate( const UINT pos, // Setting position const IMTConFeederTranslate* param // An object of a data feed parameter )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeeder.TranslateUpdate( uint pos, // Setting position CIMTConFeederTranslate param // An object of a data feed parameter )  
---  
Python (Manager API)
MTConFeeder.TranslateUpdate( pos, # Setting position param # An object of a data feed parameter )  
---  
MTConFeeder.TranslateSet( param # A list of objects of a data feed parameters )  
---  
Parameters
pos
[in] Setting position, starting with 0.
param
[in] An object of data conversion setting.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.