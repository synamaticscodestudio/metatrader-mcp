# ExperienceFX (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ ExperienceFX | [](imtclient_addresscity.md "AddressCity") [](imtclient_experiencecfd.md "ExperienceCFD") |
| --- | --- | --- |
| --- | --- |

IMTClient::ExperienceFX
Get information about the client's Forex trading experience.
C++
UINT IMTClient::ExperienceFX() const  
---  
.NET (Gateway/Manager API)
uint CIMTClient.ExperienceFX()  
---  
Return Value
A value from the [IMTClient::EnTradingExperience](imtclient_enum.htm#entradingexperience) enumeration.
IMTClient::ContactPreferred
Set information about the client's Forex trading experience.
C++
MTAPIRES IMTClient::ExperienceFX( const UINT experience // Trading experience )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.ExperienceFX( uint experience // Trading experience )  
---  
Parameters
experience
[in] Client's Forex trading experience. The trading experience is passed using the [IMTClient::EnTradingExperience](imtclient_enum.htm#entradingexperience) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.