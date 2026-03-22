# ContactPreferred (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ ContactPreferred | [](imtclient_companywebsite.md "CompanyWebsite") [](imtclient_contactlanguage.md "ContactLanguage") |
| --- | --- | --- |
| --- | --- |

IMTClient::ContactPreferred
Get the client's preferred contact methods.
C++
UINT IMTClient::ContactPreferred() const  
---  
.NET (Gateway/Manager API)
uint CIMTClient.ContactPreferred()  
---  
Return Value
A value from the [IMTClient::EnPreferredCommunication](imtclient_enum.htm#enpreferredcommunication) enumeration.
IMTClient::ContactPreferred
Set the client's preferred contact methods.
C++
MTAPIRES IMTClient::ContactPreferred( const UINT preferred // Contact method )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.ContactPreferred( uint preferred // Contact method )  
---  
Parameters
preferred
[in] Preferred contact method. The method is passed using the [IMTClient::EnPreferredCommunication](imtclient_enum.htm#enpreferredcommunication) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.