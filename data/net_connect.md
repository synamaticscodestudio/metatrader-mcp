# Connect (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Connect/Disconnect ](net_connect_disconnect.md "Connect/Disconnect")/ Connect | [](net_connect_disconnect.md "Connect/Disconnect") [](net_disconnect.md "Disconnect") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.Connect
Connect a Web client to a trade server.
MTRetCode MT5WebAPI.Connect( string server, // IP address int port, // Port ulong login, // Login string password, // Password EnPumpModes pumpModes, // Pumping mode EnCryptModes crypt, // Encryption mode int timeout // Timeout )  
---  
Parameters
server
[in] The IP address of the server to connect to.
port
[in] The port of the server to connect to.
login
[in] The login of the manager account, using which you want to connect.
password
[in] The password of the manager account, using which you want to connect.
pumpModes
[in] The pumping mode, in which connection will be established. To pass the pumping mode, the [MT5WebAPI::EnPumpModes](net_enum.htm#enpumpmodes) enumeration is used.
crypt
[in] Mode of encryption of data transmitted between the Web client and the trade server. To pass the encryption mode, the [MT5WebAPI::EnCryptModes](net_enum.htm#encryptmodes) enumeration is used.
timeout
[in] The period of waiting for server response in milliseconds.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
MT5WebAPI.Connect
Connect a Web client to a trade server.
MTRetCode MT5WebAPI.Connect( string server, // IP address int port, // Port ulong login, // Login string password, // Password EnPumpModes pumpModes // Pumping mode )  
---  
Parameters
server
[in] The IP address of the server to connect to.
port
[in] The port of the server to connect to.
login
[in] The login of the manager account, using which you want to connect.
password
[in] The password of the manager account, using which you want to connect.
pumpModes
[in] The pumping mode, in which connection will be established. To pass the pumping mode, the [MT5WebAPI::EnPumpModes](net_enum.htm#enpumpmodes) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
During connection, AES encryption of transmitted data and server response timeout of 5 seconds are used by default.