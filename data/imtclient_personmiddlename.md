# PersonMiddleName (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ PersonMiddleName | [](imtclient_personname.md "PersonName") [](imtclient_personlastname.md "PersonLastName") |
| --- | --- | --- |
| --- | --- |

IMTClient::PersonMiddleName
Get the client's middle name.
C++
LPCWSTR IMTClient::PersonMiddleName() const  
---  
.NET (Gateway/Manager API)
string CIMTClient.PersonMiddleName()  
---  
Return Value
If successful, the method returns a pointer to a string with the middle name. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTClient](imtclient.md "IMTClient") object.
To be able to use the string after the object removal (call of the [IMTClient::Release](imtclient_release.md "Release") method of this object), a copy of it should be created.
IMTClient::PersonMiddleName
Set the client's middle name.
C++
MTAPIRES IMTClient::PersonMiddleName( LPCWSTR middle_name // Client's middle name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.PersonMiddleName( string middle_name // Client's middle name )  
---  
Parameters
middle_name
[in] Client's middle name.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The middle name length is limited to 32 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.