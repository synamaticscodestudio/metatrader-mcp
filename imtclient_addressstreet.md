# AddressStreet (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ AddressStreet | [](imtclient_addresspostcode.md "AddressPostcode") [](imtclient_addressstate.md "AddressState") |
| --- | --- | --- |
| --- | --- |

IMTClient::AddressStreet
Get the address of a client.
C++
LPCWSTR IMTClient::AddressPostcode() const  
---  
.NET (Gateway/Manager API)
string CIMTClient.AddressPostcode()  
---  
Return Value
If successful, the method returns a pointer to a string with the address. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTClient](imtclient.md "IMTClient") object.
To be able to use the string after the object removal (call of the [IMTClient::Release](imtclient_release.md "Release") method of this object), a copy of it should be created.
IMTClient::AddressPostcode
Set the address of a client.
C++
MTAPIRES IMTClient::AddressPostcode( LPCWSTR street // Address )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.AddressPostcode( string street  // Address )  
---  
Parameters
street
[in] The client's address, including the street name, building number, etc.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The maximum address length is 128 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.