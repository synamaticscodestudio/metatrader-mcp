# TimeoutAttempts (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ TimeoutAttempts | [](imtconfeeder_timeoutsleep.md "TimeoutSleep") [](imtconfeeder_parameteradd.md "ParameterAdd") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::TimeoutAttempts
Get the number of attempts in the series of reconnections to the source server.
C++
UINT IMTConFeeder::TimeoutAttempts() const  
---  
.NET (Gateway/Manager API)
uint CIMTConFeeder.TimeoutAttempts()  
---  
Python (Manager API)
MTConFeeder.TimeoutAttempts  
---  
Return Value
The number of attempts in a series of reconnections.
IMTConFeeder::TimeoutAttempts
Set the number of attempts in the series of reconnections to the source server.
C++
MTAPIRES IMTConFeeder::TimeoutAttempts( const UINT attempts // The number of attempts in a series of reconnections )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeeder.TimeoutAttempts( uint attempts // The number of attempts in a series of reconnections )  
---  
Python (Manager API)
MTConFeeder.TimeoutAttempts  
---  
Parameters
attempts
[in] The number of attempts in a series of reconnections.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.