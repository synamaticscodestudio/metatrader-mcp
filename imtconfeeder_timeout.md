# Timeout (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ Timeout | [](imtconfeeder_categories.md "Categories") [](imtconfeeder_timeoutreconnect.md "TimeoutReconnect") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::Timeout
Get the timeout of a data feed before reconnecting.
C++
UINT IMTConFeeder::Timeout() const  
---  
.NET (Gateway/Manager API)
uint CIMTConFeeder.Timeout()  
---  
Return Value
Timeout of a data feed before reconnecting.
Note
The method is obsolete and is no longer used.
IMTConFeeder::Timeout
Set the timeout of a data feed before reconnecting.
C++
MTAPIRES IMTConFeeder::Timeout( const UINT timeout // Timeout )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeeder.Timeout( uint timeout // Timeout )  
---  
Parameters
timeout
[in] Timeout.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method is obsolete and is no longer used.