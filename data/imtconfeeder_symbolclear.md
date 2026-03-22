# SymbolClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ SymbolClear | [](imtconfeeder_symboldelete.md "SymbolDelete") [](imtconfeeder_symboltotal.md "SymbolTotal") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::SymbolClear
Clear the list of [symbols](config_symbol.md "Symbols") of the data feed.
C++
MTAPIRES IMTConFeeder::SymbolClear() const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeeder.SymbolClear()  
---  
Python (Manager API)
MTConFeeder.SymbolClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method clears the entire list of symbols of a data feed.