# Name (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConCommission ](imtconcommission.md "IMTConCommission")/ Name | [](imtconcommission_clear.md "Clear") [](imtconcommission_description.md "Description") |
| --- | --- | --- |
| --- | --- |

IMTConCommission::Name
Get the name of commission configuration.
C++
LPCWSTR IMTConCommission::Name() const  
---  
.NET (Gateway/Manager API)
string CIMTConCommission.Name()  
---  
Python (Manager API)
MTConCommission.Name  
---  
Return Value
If successful, it returns a pointer to a string with the name of the commission configuration. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConCommission](imtconcommission.md "IMTConCommission") object.
To use the string after the object removal (call of the [IMTConCommission::Release](imtconcommission_release.md "Release") method of this object), a copy of it should be created.
IMTConCommission::Name
Set the name of commission configuration.
C++
MTAPIRES IMTConCommission::Name( LPCWSTR name // Name of the configuration )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCommission.Name( string name // Name of the configuration )  
---  
Python (Manager API)
MTConCommission.Name  
---  
Parameters
name
[in] Name of the commission configuration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum length of commission configuration name is 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.