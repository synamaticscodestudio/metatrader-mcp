# StateReceivedBooks (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ StateReceivedBooks | [](imtconfeeder_statereceivedticks.md "StateReceivedTicks") [](imtconfeeder_statereceivednews.md "StateReceivedNews") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::StateReceivedBooks
Request number of the Depth of Market changes ([MTBook](mtbook.md "MTBook/MTBookDiff")), received by the data feed from an external data source during the current session.
C++
UINT IMTConFeeder::StateReceivedBooks() const  
---  
.NET (Gateway/Manager API)
uint CIMTConFeeder.StateReceivedBooks()  
---  
Python (Manager API)
MTConFeeder.StateReceivedBooks  
---  
Return Value
Number of Depth of Market changes.