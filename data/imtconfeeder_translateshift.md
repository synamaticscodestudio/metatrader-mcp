# TranslateShift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ TranslateShift | [](imtconfeeder_translateclear.md "TranslateClear") [](imtconfeeder_translatetotal.md "TranslateTotal") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::TranslateShift
Move a setting of conversion of data transmitted by the data feed in the list.
C++
MTAPIRES IMTConFeeder::TranslateShift( const UINT pos, // Setting position const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeeder.TranslateShift( uint pos, // Setting position int shift // Shift )  
---  
Python (Manager API)
MTConFeeder.TranslateShift( pos, # Setting position shift # Shift )  
---  
Parameters
pos
[in] Setting position, starting with 0.
shift
[in] Shift from its current position. A negative value means the shift to the top of the list, a positive value - to its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.