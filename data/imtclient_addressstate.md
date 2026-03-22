# AddressState (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ AddressState | [](imtclient_addressstreet.md "AddressStreet") [](imtclient_addresscity.md "AddressCity") |
| --- | --- | --- |
| --- | --- |

IMTClient::AddressState
Get the client's region of residence.
C++
LPCWSTR IMTClient::AddressState() const  
---  
.NET (Gateway/Manager API)
string CIMTClient.AddressState()  
---  
Return Value
If successful, the method returns a pointer to a string with the region. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTClient](imtclient.md "IMTClient") object.
To be able to use the string after the object removal (call of the [IMTClient::Release](imtclient_release.md "Release") method of this object), a copy of it should be created.
IMTClient::AddressState
Set the client's region of residence.
C++
MTAPIRES IMTClient::AddressState( LPCWSTR state // Region )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.AddressState( string state  // Region )  
---  
Parameters
street
[in] Client's region of residence.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The region length is limited to 64 characters (with the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.