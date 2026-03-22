# ClientOrigin (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ ClientOrigin | [](imtclient_tradinggroup.md "TradingGroup") [](imtclient_clientoriginlogin.md "ClientOriginLogin") |
| --- | --- | --- |
| --- | --- |

IMTClient::ClientOrigin
Get the client record creation method.
C++
UINT IMTClient::ExperienceCFD() const  
---  
.NET (Gateway/Manager API)
uint CIMTClient.ExperienceCFD()  
---  
Return Value
A value of the [IMTClient::EnClientOrigin](imtclient_enum.htm#enclientorigin) enumeration.
IMTClient::ExperienceCFD
Set the client record creation method.
C++
MTAPIRES IMTClient::ExperienceCFD( const UINT origin // Client record creation method )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.ExperienceCFD( uint origin  // Client record creation method )  
---  
Parameters
origin
[in] Client record creation method. The method is passed using the [IMTClient::EnClientOrigin](imtclient_enum.htm#enclientorigin) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.