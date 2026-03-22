# GatewayServer (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ GatewayServer | [](imtconfeeder_feedpassword.md "FeedPassword") [](imtconfeeder_gatewaylogin.md "GatewayLogin") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::GatewayServer
Gets the address, on which the data feed will accept connections from the history server.
C++
LPCWSTR IMTConFeeder::GatewayServer() const  
---  
.NET (Gateway/Manager API)
string CIMTConFeeder.GatewayServer()  
---  
Python (Manager API)
MTConFeeder.GatewayServer  
---  
Return Value
If successful, it returns a pointer to the string with the address. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConFeeder](imtconfeeder.md "MTConFeeder") object.
To use the string after the object removal (call of the [IMTConFeeder::Release](imtconfeeder_release.md "Release") method of this object), a copy of it should be created.
IMTConFeeder::GatewayServer
Sets the address, on which the data feed will accept connections from the history server.
C++
MTAPIRES IMTConFeeder::GatewayServer( LPCWSTR server // Server address )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeeder.GatewayServer( string server // Server address )  
---  
Python (Manager API)
MTConFeeder.GatewayServer  
---  
Parameters
server
[in] The address, on which the data feed will accept connections.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum length of the address is 128 characters (including the sign of the string end). If a string of a greater length is assigned, it will be cut to this length.