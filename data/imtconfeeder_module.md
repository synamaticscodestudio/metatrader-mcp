# Module (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ Module | [](imtconfeeder_name.md "Name") [](imtconfeeder_feedserver.md "FeedServer") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::Module
Get the name of the data feed module.
C++
LPCWSTR IMTConFeeder::Module() const  
---  
.NET (Gateway/Manager API)
string CIMTConFeeder.Module()  
---  
Python (Manager API)
MTConFeeder.Module  
---  
Return Value
If successful, it returns a pointer to a string with the name of the data feed module. Otherwise, it returns NULL.
Note
It returns the name of the module (exe-file) that corresponds to the data feed.
The pointer to the resulting string is valid for the lifetime of the [IMTConFeeder](imtconfeeder.md "MTConFeeder") object.
To use the string after the object removal (call of the [IMTConFeeder::Release](imtconfeeder_release.md "Release") method of this object), a copy of it should be created.
IMTConFeeder::Module
Set the name of the data feed module.
C++
MTAPIRES IMTConFeeder::Module( LPCWSTR name // The name of the data feed module )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeeder.Module( string name // The name of the data feed module )  
---  
Python (Manager API)
MTConFeeder.Module  
---  
Parameters
name
[in] The name of the data feed module.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum name length is 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.