# Name (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ Name | [](imtconfeeder_clear.md "Clear") [](imtconfeeder_module.md "Module") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::Name
Gets the name of the data feed.
C++
LPCWSTR IMTConFeeder::Name() const  
---  
.NET (Gateway/Manager API)
string CIMTConFeeder.Name()  
---  
Python (Manager API)
MTConFeeder.Name  
---  
Return Value
If successful, it returns a pointer to a string with the name of the data feed. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConFeeder](imtconfeeder.md "MTConFeeder") object.
To use the string after the object removal (call of the [IMTConFeeder::Release](imtconfeeder_release.md "Release") method of this object), a copy of it should be created.
IMTConFeeder::Name
Sets the name of the data feed.
C++
MTAPIRES IMTConFeeder::Name( LPCWSTR name // Data feed name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeeder.Name( srting name // Data feed name )  
---  
Python (Manager API)
MTConFeeder.Name  
---  
Parameters
name
[in] The name of a data feed.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum name length is 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.