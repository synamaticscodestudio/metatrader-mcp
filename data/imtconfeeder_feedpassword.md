# FeedPassword (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ FeedPassword | [](imtconfeeder_feedlogin.md "FeedLogin") [](imtconfeeder_gatewayserver.md "GatewayServer") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::FeedPassword
Get a password for the authorization of a data feed on the source server.
C++
LPCWSTR IMTConFeeder::FeedPassword() const  
---  
.NET (Gateway/Manager API)
string CIMTConFeeder.FeedPassword()  
---  
Python (Manager API)
MTConFeeder.FeedPassword  
---  
Return Value
If successful, it returns a pointer to a string with a password for authorization on the source server. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConFeeder](imtconfeeder.md "MTConFeeder") object.
To use the string after the object removal (call of the [IMTConFeeder::Release](imtconfeeder_release.md "Release") method of this object), a copy of it should be created.
IMTConFeeder::FeedPassword
Set a password for the authorization of a data feed on the source server.
C++
MTAPIRES IMTConFeeder::FeedPassword( LPCWSTR password // Password )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeeder.FeedPassword( string password // Password )  
---  
Python (Manager API)
MTConFeeder.FeedPassword  
---  
Parameters
password
[in] A password for authorization.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum password length is 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.