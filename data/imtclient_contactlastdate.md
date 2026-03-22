# ContactLastDate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ ContactLastDate | [](imtclient_contactsocialnetworks.md "ContactSocialNetworks") [](imtclient_addresscountry.md "AddressCountry") |
| --- | --- | --- |
| --- | --- |

IMTClient::ContactLastDate
Get the date of the last client contact.
C++
INT64 IMTClient::ContactLastDate() const  
---  
.NET (Gateway/Manager API)
long CIMTClient.ContactLastDate()  
---  
Return Value
Date of the last contact in seconds elapsed since 01.01.1970.
IMTClient::ContactLastDate
Set the date of the last client contact.
C++
MTAPIRES IMTClient::ContactLastDate( const INT64 date // Date of contact )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.ContactLastDate( long date // Date of contact )  
---  
Parameters
date
[in] Date of the last contact in seconds elapsed since 01.01.1970.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.