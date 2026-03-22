# ExperienceFutures (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ ExperienceFutures | [](imtclient_experiencecfd.md "ExperienceCFD") [](imtclient_experiencestocks.md "ExperienceStocks") |
| --- | --- | --- |
| --- | --- |

IMTClient::ExperienceFutures
Get information about the client's Futures trading experience.
C++
UINT IMTClient::ExperienceFutures() const  
---  
.NET (Gateway/Manager API)
uint CIMTClient.ExperienceFutures()  
---  
Return Value
A value from the [IMTClient::EnTradingExperience](imtclient_enum.htm#entradingexperience) enumeration.
IMTClient::ExperienceFutures
Set information about the client's Futures trading experience.
C++
MTAPIRES IMTClient::ExperienceFutures( const UINT experience // Trading experience )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.ExperienceFutures( uint experience // Trading experience )  
---  
Parameters
experience
[in] Client's Futures trading experience. The trading experience is passed using the [IMTClient::EnTradingExperience](imtclient_enum.htm#entradingexperience) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.