# Mode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ Mode | [](imtconfeeder_gatewaypassword.md "GatewayPassword") [](imtconfeeder_flags.md "Flags") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::Mode
Get the data feed operation mode.
C++
UINT IMTConFeeder::Mode() const  
---  
.NET (Gateway/Manager API)
EnFeedersMode CIMTConFeeder.Mode()  
---  
Python (Manager API)
MTConFeeder.Mode  
---  
Return Value
One of the values of the [IMTConFeeder::EnFeedersMode](imtconfeeder_enum.htm#enfeedersmode) enumeration.
IMTConFeeder::Mode
Set the data feed operation mode.
C++
MTAPIRES IMTConFeeder::Mode( const UINT mode // Operation mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeeder.Mode( EnFeedersMode mode // Operation mode )  
---  
Python (Manager API)
MTConFeeder.Mode  
---  
Parameters
mode
[in] The [IMTConFeeder::EnFeedersMode](imtconfeeder_enum.htm#enfeedersmode) enumeration is used to pass the operation mode.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.