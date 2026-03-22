# ExperienceStocks (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ ExperienceStocks | [](imtclient_experiencefutures.md "ExperienceFutures") [](imtclient_tradinggroup.md "TradingGroup") |
| --- | --- | --- |
| --- | --- |

IMTClient::ExperienceStocks
Get information about the client's Stock trading experience.
C++
UINT IMTClient::ExperienceStocks() const  
---  
.NET (Gateway/Manager API)
uint CIMTClient.ExperienceStocks()  
---  
Return Value
A value from the [IMTClient::EnTradingExperience](imtclient_enum.htm#entradingexperience) enumeration.
IMTClient::ExperienceStocks
Set information about the client's Stock trading experience.
C++
MTAPIRES IMTClient::ExperienceStocks( const UINT experience // Trading experience )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.ExperienceStocks( uint experience // Trading experience )  
---  
Parameters
experience
[in] Client's Stocks trading experience. The trading experience is passed using the [IMTClient::EnTradingExperience](imtclient_enum.htm#entradingexperience) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.