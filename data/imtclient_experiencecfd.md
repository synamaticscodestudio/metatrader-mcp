# ExperienceCFD (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ ExperienceCFD | [](imtclient_experiencefx.md "ExperienceFX") [](imtclient_experiencefutures.md "ExperienceFutures") |
| --- | --- | --- |
| --- | --- |

IMTClient::ExperienceCFD
Get information about the client's CFD trading experience.
C++
UINT IMTClient::ExperienceCFD() const  
---  
.NET (Gateway/Manager API)
uint CIMTClient.ExperienceCFD()  
---  
Return Value
A value from the [IMTClient::EnTradingExperience](imtclient_enum.htm#entradingexperience) enumeration.
IMTClient::ExperienceCFD
Set information about the client's CFD trading experience.
C++
MTAPIRES IMTClient::ExperienceCFD( const UINT experience // Trading experience )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.ExperienceCFD( uint experience // Trading experience )  
---  
Parameters
experience
[in] Client's CFD trading experience. The trading experience is passed using the [IMTClient::EnTradingExperience](imtclient_enum.htm#entradingexperience) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.