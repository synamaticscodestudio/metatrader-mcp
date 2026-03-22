# TimeoutReconnect (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ TimeoutReconnect | [](imtconfeeder_timeout.md "Timeout") [](imtconfeeder_timeoutsleep.md "TimeoutSleep") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::TimeoutReconnect
Get timeout to wait between attempts to reconnect to the source server.
C++
UINT IMTConFeeder::TimeoutReconnect() const  
---  
.NET (Gateway/Manager API)
uint CIMTConFeeder.TimeoutReconnect()  
---  
Python (Manager API)
MTConFeeder.TimeoutReconnect  
---  
Return Value
Timeout between attempts to reconnect to the source server.
IMTConFeeder::TimeoutReconnect
Set timeout to wait between attempts to reconnect to the source server.
C++
MTAPIRES IMTConFeeder::TimeoutReconnect( const UINT timeout // Timeout between reconnections )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeeder.TimeoutReconnect( uint timeout // Timeout between reconnections )  
---  
Python (Manager API)
MTConFeeder.TimeoutReconnect  
---  
Parameters
timeout
[in] Timeout between reconnections.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.