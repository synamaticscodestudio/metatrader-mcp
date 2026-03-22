# StateConnected (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ StateConnected | [](imtconfeeder_translateget.md "TranslateGet") [](imtconfeeder_statereceivedticks.md "StateReceivedTicks") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::StateConnected
Get the state of the data feed connection to an external data source.
C++
bool IMTConFeeder::StateConnected() const  
---  
.NET (Gateway/Manager API)
bool CIMTConFeeder.StateConnected()  
---  
Python (Manager API)
MTConFeeder.StateConnected  
---  
Return Value
If a data feed has successfully connected to a history data source and is ready to interact with it, the method returns TRUE, otherwise — FALSE.