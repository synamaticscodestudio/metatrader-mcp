# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ Assign | [](imtconfeeder_release.md "Release") [](imtconfeeder_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConFeeder::Assign( const IMTConFeeder* param // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeeder.Assign( CIMTConFeeder param // Source object )  
---  
Parameters
param
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.