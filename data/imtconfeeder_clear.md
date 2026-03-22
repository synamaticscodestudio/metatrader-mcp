# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ Clear | [](imtconfeeder_assign.md "Assign") [](imtconfeeder_name.md "Name") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::Clear
Clear an object.
C++
MTAPIRES IMTConFeeder::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeeder.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.