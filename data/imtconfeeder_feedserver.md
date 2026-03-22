# FeedServer (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ FeedServer | [](imtconfeeder_module.md "Module") [](imtconfeeder_feedlogin.md "FeedLogin") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::FeedServer
Get the address of the server to which the data feed connects.
C++
LPCWSTR IMTConFeeder::FeedServer() const  
---  
.NET (Gateway/Manager API)
string CIMTConFeeder.FeedServer()  
---  
Python (Manager API)
MTConFeeder.FeedServer  
---  
Return Value
If successful, it returns a pointer to a string with the address of the server to which the data feed connects. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConFeeder](imtconfeeder.md "MTConFeeder") object.
To use the string after the object removal (call of the [IMTConFeeder::Release](imtconfeeder_release.md "Release") method of this object), a copy of it should be created.
IMTConFeeder::FeedServer
Set the address of the server to which the data feed will connect.
C++
MTAPIRES IMTConFeeder::FeedServer( LPCWSTR server // Server address )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeeder.FeedServer( string server // Server address )  
---  
Python (Manager API)
MTConFeeder.FeedServer  
---  
Parameters
server
[in] Server address.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum length of the address is 128 characters (including the sign of the string end). If a string of a greater length is assigned, it will be cut to this length.