# PersonGender (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ PersonGender | [](imtclient_personcitizenship.md "PersonCitizenship") [](imtclient_persontaxid.md "PersonTaxID") |
| --- | --- | --- |
| --- | --- |

IMTClient::PersonGender
Get the client's gender.
C++
UINT IMTClient::PersonGender() const  
---  
.NET (Gateway/Manager API)
uint CIMTClient.PersonGender()  
---  
Return Value
A value from the [IMTClient::EnGender](imtclient_enum.htm#engender) enumeration.
IMTClient::PersonGender
Set the client's gender.
C++
MTAPIRES IMTClient::PersonGender( const UINT gender // Client gender )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.PersonGender( uint gender // Client gender )  
---  
Parameters
gender
[in] Client gender. The gender is passed using the [IMTClient::EnGender](imtclient_enum.htm#engender) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.