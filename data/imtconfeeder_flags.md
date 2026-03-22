# Flags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ Flags | [](imtconfeeder_mode.md "Mode") [](imtconfeeder_keywords.md "Keywords") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::Flags
Get the type of information transmitted by the data feed.
C++
UINT IMTConFeeder::Flags() const  
---  
.NET (Gateway/Manager API)
EnFeedersFlags CIMTConFeeder.Flags()  
---  
Python (Manager API)
MTConFeeder.Flags  
---  
Return Value
One of the values of the [IMTConFeeder::EnFeedersFlags](imtconfeeder_enum.htm#enfeederflags) enumeration.
IMTConFeeder::Flags
Set the type of information transmitted by the data feed.
C++
MTAPIRES IMTConFeeder::Flags( const UINT flags // Type of information )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeeder.Flags( EnFeedersFlags flags // Type of information )  
---  
Python (Manager API)
MTConFeeder.Flags  
---  
Parameters
flags
[in] The [IMTConFeeder::EnFeedersFlags](imtconfeeder_enum.htm#enfeederflags) enumeration is used to pass the operation mode.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.