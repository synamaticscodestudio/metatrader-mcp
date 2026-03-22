# ParameterClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ ParameterClear | [](imtconfeeder_parameterdelete.md "ParameterDelete") [](imtconfeeder_parametershift.md "ParameterShift") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::ParameterClear
Clear the list of parameters of a data feed.
C++
MTAPIRES IMTConFeeder::ParameterClear() const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeeder.ParameterClear()  
---  
Python (Manager API)
MTConFeeder.ParameterClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method clears the entire list of parameters of a data feed.