# PersonBirthDate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ PersonBirthDate | [](imtclient_personlastname.md "PersonLastName") [](imtclient_personcitizenship.md "PersonCitizenship") |
| --- | --- | --- |
| --- | --- |

IMTClient::PersonBirthDate
Get the client's date of birth.
C++
INT64 IMTClient::PersonBirthDate() const  
---  
.NET (Gateway/Manager API)
long CIMTClient.PersonBirthDate()  
---  
Return Value
The client's date of birth. The date of birth is specified in the [FILETIME](https://docs.microsoft.com/en-us/windows/win32/api/minwinbase/ns-minwinbase-filetime) format: the number of 100-nanosecond intervals that have elapsed since January 1, 1601.
IMTClient::PersonBirthDate
Set the client's date of birth.
C++
MTAPIRES IMTClient::PersonBirthDate( const INT64 date // Date of birth )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.PersonBirthDate( long date // Date of birth )  
---  
Parameters
time
[in] Client's date of birth. The date of birth is specified in the [FILETIME](https://docs.microsoft.com/en-us/windows/win32/api/minwinbase/ns-minwinbase-filetime) format: the number of 100-nanosecond intervals that have elapsed since January 1, 1601.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.