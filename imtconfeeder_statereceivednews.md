# StateReceivedNews (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ StateReceivedNews | [](imtconfeeder_statereceivedbooks.md "StateReceivedBooks") [](imtconfeeder_statetrafficin.md "StateTrafficIn") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::StateReceivedBooks
Request number news ([MTNews](mtnews.md "MTNews")) received by the data feed from an external data source during the current session.
C++
UINT IMTConFeeder::StateReceivedNews() const  
---  
.NET (Gateway/Manager API)
uint CIMTConFeeder.StateReceivedNews()  
---  
Python (Manager API)
MTConFeeder.StateReceivedNews  
---  
Return Value
Number of news.