# GatewayPassword (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ GatewayPassword | [](imtconfeeder_gatewaylogin.md "GatewayLogin") [](imtconfeeder_mode.md "Mode") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::GatewayPassword
Gets a password for the authorization of the history server on the gateway server.
C++
LPCWSTR IMTConFeeder::GatewayPassword() const  
---  
.NET (Gateway/Manager API)
string CIMTConFeeder.GatewayPassword()  
---  
Python (Manager API)
MTConFeeder.GatewayPassword  
---  
Return Value
If successful, it returns a pointer to a string with a password for authorization on the data source. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConFeeder](imtconfeeder.md "MTConFeeder") object.
To use the string after the object removal (call of the [IMTConFeeder::Release](imtconfeeder_release.md "Release") method of this object), a copy of it should be created.
Similar to gateways, all data feeds use Gateway API for operation. In order to connect a history server to the gateway server (developed using Gateway API), you need to specify authorization parameters. These parameters are designed for security purposes, as well as for ease of debugging of data feeds for third-party developers. If you do not need debugging, you can specify any login and password, as well as any available network address, through which the interaction of the data feed with the server will be implemented.
IMTConFeeder::GatewayPassword
Sets a password for the authorization of the history server on the gateway server.
C++
MTAPIRES IMTConFeeder::GatewayPassword( LPCWSTR password // Password )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeeder.GatewayPassword( string password // Password )  
---  
Python (Manager API)
MTConFeeder.GatewayPassword  
---  
Parameters
password
[in] Password for authentication on the data feed.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The password must meet minimum security requirements (be no less than six symbols long and contain at least two of three symbols types: lower-case letters, upper-case letters or digits).
The length of the password is limited to 64 characters (including the end-of-line character). If a string is longer, it will be truncated to the required length.