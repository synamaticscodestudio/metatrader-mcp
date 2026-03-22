# StateReceivedTicks (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ StateReceivedTicks | [](imtconfeeder_stateconnected.md "StateConnected") [](imtconfeeder_statereceivedbooks.md "StateReceivedBooks") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::StateReceivedTicks
Request number of price changes ([MTTick](mttick.md "MTTick")), received by the data feed from an external data source during the current session.
C++
UINT IMTConFeeder::StateReceivedTicks() const  
---  
.NET (Gateway/Manager API)
uint CIMTConFeeder.StateReceivedTicks()  
---  
Python (Manager API)
MTConFeeder.StateReceivedTicks  
---  
Return Value
Number of price changes.